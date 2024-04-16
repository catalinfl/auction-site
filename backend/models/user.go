package models

type User struct {
	ID              uint      `json:"id" gorm:"primaryKey"`
	Username        string    `json:"username"`
	Email           string    `json:"email"`
	Password        string    `json:"password"`
	AuctionsCreated []Auction `json:"auctions_created" gorm:"foreignKey:UserID"`
}
