package models

import (
	"database/sql/driver"
	"encoding/json"
	"net/http"
)

type StringArray []string

func (a StringArray) Value() (driver.Value, error) {
	return json.Marshal(a)
}

func (a *StringArray) Scan(value interface{}) error {
	bytes, ok := value.([]byte)

	if !ok {
		http.Error(nil, "Internal server error", http.StatusInternalServerError)
	}

	return json.Unmarshal(bytes, &a)

}

type Auction struct {
	ID          uint        `json:"id" gorm:"primaryKey"`
	Title       string      `json:"title"`
	Description string      `json:"description"`
	Price       float64     `json:"price"`
	Active      bool        `json:"active"`
	Images      StringArray `json:"image"`
	CategoryID  uint        `json:"category_id"`
	UserID      uint        `json:"user_id"`
}
