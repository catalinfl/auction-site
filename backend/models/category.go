package models

type Category struct {
	ID       uint      `json:"category" gorm:"primaryKey"`
	Name     string    `json:"name"`
	Auctions []Auction `json:"auctions" gorm:"foreignKey:CategoryID"`
}
