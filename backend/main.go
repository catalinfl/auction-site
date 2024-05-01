package main

import (
	"net/http"

	"github.com/catalinfl/auction-site/misc"
	"github.com/catalinfl/auction-site/routes"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

func main() {

	r := chi.NewRouter()

	r.Use(middleware.Logger)

	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"},
		AllowedMethods:   []string{"GET", "POST", "PUT"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		AllowCredentials: true,
		MaxAge:           9000,
	}))

	misc.ConnectDB()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello world"))
	})

	r.Route("/api", func(r chi.Router) {
		r.Mount("/user", routes.UserRoutes())
		r.Mount("/auction", routes.AuctionRoutes())
		r.Mount("/category", routes.CategoryRoutes())
	})

	http.ListenAndServe(":8080", r)
}
