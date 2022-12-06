package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User is the model that governs all notes objects retrieved or inserted into the DB
type User struct {
	ID            primitive.ObjectID `bson:"_id"`
	Email         *string            `json:"email" validate:"email,required"`
	Password      string             `json:"Password" validate:"required,min=6""`
	Created_at    time.Time          `json:"created_at"`
	Updated_at    time.Time          `json:"updated_at"`
}
