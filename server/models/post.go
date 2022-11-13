package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Post struct {
	ID          primitive.ObjectID `bson:"_id"`
	Username    *string            `json:"username"`
	Title       *string            `json:"title"`
	Location    *string            `json:"location"`
	Price       *float64           `json:"price"`
	Description *string            `json:"description"`
}
