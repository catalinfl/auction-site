package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/catalinfl/auction-site/misc"
	"github.com/catalinfl/auction-site/models"
	"github.com/go-chi/chi/v5"
)

func CreateAuction(w http.ResponseWriter, r *http.Request) {

	var auction models.Auction

	err := json.NewDecoder(r.Body).Decode(&auction)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = misc.Database.Create(&auction).Error

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	auctionJSON, err := json.Marshal(auction)

	if err != nil {
		http.Error(w, "Error converting auction to JSON", http.StatusInternalServerError)
		return
	}

	w.Write(auctionJSON)
}

func GetAuction(w http.ResponseWriter, r *http.Request) {

	id := chi.URLParam(r, "id")

	if id == "" {
		http.Error(w, "ID is required", http.StatusBadRequest)
		return
	}

	var auction models.Auction

	err := misc.Database.Where("id = ?", id).First(&auction).Error

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	auctionJSON, err := json.Marshal(auction)

	if err != nil {
		http.Error(w, "Error converting auction to JSON", http.StatusInternalServerError)
	}

	w.Write(auctionJSON)
}

func GetAllAuctions(w http.ResponseWriter, r *http.Request) {

	var auctions []models.Auction

	err := misc.Database.Find(&auctions).Error

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	auctionsJSON, err := json.Marshal(auctions)

	if err != nil {

		http.Error(w, "Error converting auctions to JSON", http.StatusInternalServerError)
		return
	}

	w.Write(auctionsJSON)
}

type PriceUpdate struct {
	Price float64 `json:"price"`
}

func ModifyPrice(w http.ResponseWriter, r *http.Request) {

	id := chi.URLParam(r, "id")

	var auction models.Auction

	err := misc.Database.Where("id = ?", id).First(&auction).Error

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var newPrice PriceUpdate

	err = json.NewDecoder(r.Body).Decode(&newPrice)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	auction.Price = newPrice.Price

	err = misc.Database.Save(&auction).Error

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	auctionJSON, err := json.Marshal(auction)

	if err != nil {
		http.Error(w, "Error converting auction to JSON", http.StatusInternalServerError)
		return
	}

	w.Write(auctionJSON)
}
