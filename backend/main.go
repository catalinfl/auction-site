package main

import (
	"fmt"
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
		AllowCredentials: true,
	}))

	misc.ConnectDB()

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println(r.Cookie("token"))
	})

	r.Route("/api", func(r chi.Router) {
		r.Mount("/user", routes.UserRoutes())
		r.Mount("/auction", routes.AuctionRoutes())
		r.Mount("/category", routes.CategoryRoutes())
	})

	http.ListenAndServe(":8080", r)
}
