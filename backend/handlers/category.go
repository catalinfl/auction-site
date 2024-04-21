package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/catalinfl/auction-site/misc"
	"github.com/catalinfl/auction-site/models"
	"github.com/go-chi/chi/v5"
)

func CreateCategory(w http.ResponseWriter, r *http.Request) {
	var category models.Category

	var t json.Decoder = *json.NewDecoder(r.Body)

	err := t.Decode(&category)

	if err != nil {
		http.Error(w, "Error decoding category", http.StatusInternalServerError)
		return
	}

	category.Auctions = []models.Auction{}

	err = misc.Database.Create(&category).Error

	if err != nil {
		http.Error(w, "Error creating category", http.StatusInternalServerError)
		return
	}

	categoryJSON, err := json.Marshal(category)

	if err != nil {
		http.Error(w, "Error converting category to JSON", http.StatusInternalServerError)
		return
	}

	w.Write(categoryJSON)

}

func GetAllCategories(w http.ResponseWriter, r *http.Request) {

	var categories []models.Category

	err := misc.Database.Find(&categories).Error

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	categoriesJSON, err := json.Marshal(categories)

	if err != nil {
		http.Error(w, "Error converting categories to JSON", http.StatusInternalServerError)
		return
	}

	w.Write(categoriesJSON)

}

func GetCategory(w http.ResponseWriter, r *http.Request) {

	id := chi.URLParam(r, "id")

	if id == "" {
		http.Error(w, "ID is required", http.StatusBadRequest)
		return
	}

	var category models.Category

	err := misc.Database.Where("id = ?", id).First(&category).Error

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	categoryJSON, err := json.Marshal(category)

	if err != nil {
		http.Error(w, "Error converting category to JSON", http.StatusInternalServerError)
		return
	}

	w.Write(categoryJSON)
}
