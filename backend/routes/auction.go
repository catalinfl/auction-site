package routes

import (
	"github.com/catalinfl/auction-site/handlers"
	"github.com/go-chi/chi/v5"
)

func AuctionRoutes() *chi.Mux {

	auctionRouter := chi.NewRouter()

	auctionRouter.Get("/", handlers.GetAllAuctions)
	auctionRouter.Get("/{id}", handlers.GetAuction)

	return auctionRouter
}
