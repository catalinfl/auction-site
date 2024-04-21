package models

import (
	"github.com/lib/pq"
)

// type StringArray []string

// func (a *StringArray) Scan(value any) error {
// 	if strings.Contains(value.(string), ",") {
// 		*a = strings.Split(value.(string), ",")
// 		return nil
// 	} else {
// 		*a = []string{value.(string)}
// 		return nil
// 	}
// }

// func (a StringArray) Value() (driver.Value, error) {
// 	if len(a) == 0 {
// 		return nil, nil
// 	}

// 	return strings.Join(a, ","), nil
// }

type Auction struct {
	ID          uint           `json:"id" gorm:"primaryKey"`
	Title       string         `json:"title"`
	Description string         `json:"description"`
	Price       float64        `json:"price"`
	Active      bool           `json:"active"`
	Images      pq.StringArray `json:"image" gorm:"type:text[]"`
	CategoryID  uint           `json:"category_id"`
	UserID      uint           `json:"user_id"`
}
