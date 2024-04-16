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

	db.AutoMigrate(&models.Auction{}, &models.Category{}, &models.User{})

	Database = db

	fmt.Println("Connected to database")
}
