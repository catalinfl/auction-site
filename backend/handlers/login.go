package handlers

import (
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/catalinfl/auction-site/misc"
	"github.com/catalinfl/auction-site/models"
	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
)

func Login(w http.ResponseWriter, r *http.Request) {

	var user models.User

	err := json.NewDecoder(r.Body).Decode(&user)

	if err != nil {
		http.Error(w, "Error decoding user", http.StatusInternalServerError)
		return
	}

	if user.Username == "" || user.Password == "" {
		http.Error(w, "Username and password are required", http.StatusBadRequest)
		return
	}

	if len(user.Password) < 6 {
		http.Error(w, "Password must be at least 6 characters long", http.StatusBadRequest)
		return
	}

	if len(user.Username) < 3 {
		http.Error(w, "Username must be at least 3 characters long", http.StatusBadRequest)
		return
	}

	var userDB models.User

	err = misc.Database.Where("username = ?", user.Username).First(&userDB).Error

	if err != nil {
		http.Error(w, "Username not found", http.StatusBadRequest)
		return
	}

	if !CheckPasswordHash(user.Password, userDB.Password) {
		http.Error(w, "Invalid password", http.StatusBadRequest)
		return
	}

	token, err := CreateToken(user.Username)

	if err != nil {
		http.Error(w, "Error creating token", http.StatusInternalServerError)
		return
	}

	cookie := &http.Cookie{
		Name:     "token",
		Value:    token,
		Expires:  time.Now().Add(24 * time.Hour),
		HttpOnly: true,
		Path:     "/",
	}

	http.SetCookie(w, cookie)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"username": user.Username})
}

func VerifyIsLoggedIn(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("token")

	if err != nil {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	username, err := VerifyToken(cookie.Value)

	if err != nil {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(map[string]string{"username": username})
}

func CreateToken(username string) (string, error) {

	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)

	claims["sub"] = username

	godotenv.Load()

	JWT_SECRET := os.Getenv("JWT_SECRET")

	tokenString, err := token.SignedString([]byte(JWT_SECRET))

	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func VerifyToken(tokenString string) (string, error) {

	godotenv.Load()

	JWT_SECRET := os.Getenv("JWT_SECRET")

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte(JWT_SECRET), nil
	})

	if err != nil {
		return "", err
	}

	claims, ok := token.Claims.(jwt.MapClaims)

	if !ok || !token.Valid {
		return "", err
	}

	return claims["sub"].(string), nil
}
