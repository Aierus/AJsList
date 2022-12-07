package routes

import (
	"os"
	"context"
	"fmt"
	"net/http"
	"time"

	"server/models"

	"golang.org/x/crypto/bcrypt"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"github.com/golang-jwt/jwt/v4"
)

var user_validate = validator.New()
var usersCollection *mongo.Collection = OpenCollection(Client, "users")


func Signup(c *gin.Context) {

	// Get email/pass off request body
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var user models.User

	if err := c.BindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Hash password
	hash, err:= bcrypt.GenerateFromPassword([]byte(user.Password),10)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Failed to hash password": err.Error()})
		return
	}

	// Create user document and fill required fields 
	validationErr := user_validate.Struct(user)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}
	user.ID = primitive.NewObjectID()
	user.Password = string(hash)
	user.Created_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))
	user.Updated_at, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))

	// Add struct to collection
	result, insertErr := usersCollection.InsertOne(ctx, user)
	if insertErr != nil {
		msg := fmt.Sprintf("user item was not created")
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		return
	}
	defer cancel()
	c.JSON(http.StatusOK, result)
}

func Login(c *gin.Context) {

	// Get email and pass from request body
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var body struct {
		Email    *string
		Password string
	}

	if err := c.BindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Find the requested user document
	var user models.User
	if err := usersCollection.FindOne(ctx, bson.M{"email": bson.M{"$exists": true, "$eq": body.Email}}).Decode(&user); err != nil {
    	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}	
	
	
	// Compare login in pass with the saved user pass
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email or password"})
		return
	}

	// Generate JWT 
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims {
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create token"})
		return
	}

	// Send the token back
	c.JSON(http.StatusOK, gin.H {
		"token": tokenString,
	})

	defer cancel()
}
