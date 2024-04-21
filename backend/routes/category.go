package routes

import (
	"github.com/catalinfl/auction-site/handlers"
	"github.com/go-chi/chi/v5"
)

func CategoryRoutes() *chi.Mux {
	categoryRouter := chi.NewRouter()

	categoryRouter.Get("/", handlers.GetAllCategories)
	categoryRouter.Get("/{id}", handlers.GetCategory)
	categoryRouter.Post("/", handlers.CreateCategory)

	return categoryRouter

}
