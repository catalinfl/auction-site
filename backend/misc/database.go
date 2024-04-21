package misc

import (
	"fmt"
	"net/http"
	"os"

	"github.com/catalinfl/auction-site/models"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Database *gorm.DB

func ConnectDB() {

	godotenv.Load()

	url := os.Getenv("DATABASE_URL")

	db, err := gorm.Open(postgres.Open(url), &gorm.Config{})

	if err != nil {
		http.Error(nil, "Failed to connect to database", http.StatusInternalServerError)
	}

	err = db.AutoMigrate(&models.Category{}, &models.User{}, &models.Auction{})

	if err != nil {
		http.Error(nil, "Failed to migrate database", http.StatusInternalServerError)
		return
	}

	Database = db

	fmt.Println("Connected to database")
}
