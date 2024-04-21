package main

import (
	"net/http"

	"github.com/catalinfl/auction-site/misc"
	"github.com/catalinfl/auction-site/routes"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {

	r := chi.NewRouter()

	r.Use(middleware.Logger)
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
