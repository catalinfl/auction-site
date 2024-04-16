package routes

import (
	"github.com/catalinfl/auction-site/handlers"
	"github.com/go-chi/chi/v5"
)

func UserRoutes() *chi.Mux {

	userRouter := chi.NewRouter()

	userRouter.Post("/register", handlers.Register)
	userRouter.Post("/login", handlers.Login)

	userRouter.Get("/{id}", handlers.GetUser)

	return userRouter

}
