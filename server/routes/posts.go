package routes

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"server/models"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var validate = validator.New()
var postCollection *mongo.Collection = OpenCollection(Client, "posts")

// add a post
func AddPost(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var post models.Post

	if err := c.BindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	validationErr := validate.Struct(post)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}
	post.ID = primitive.NewObjectID()

	result, insertErr := postCollection.InsertOne(ctx, post)
	if insertErr != nil {
		msg := fmt.Sprintf("post item was not created")
		c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
		return
	}

	defer cancel()
	c.JSON(http.StatusOK, result)
}

// get all posts
func GetPosts(c *gin.Context) {
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var posts []bson.M
	cursor, err := postCollection.Find(ctx, bson.M{})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if err = cursor.All(ctx, &posts); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	defer cancel()

	fmt.Println(posts)
	c.JSON(http.StatusOK, posts)
}

// get all posts by a username
func GetPostsByUsername(c *gin.Context) {

	username := c.Params.ByName("username")
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var posts []bson.M
	cursor, err := postCollection.Find(ctx, bson.M{"username": username})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if err = cursor.All(ctx, &posts); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cancel()
	fmt.Println(posts)
	c.JSON(http.StatusOK, posts)
}

// get a post by its id
func GetPostById(c *gin.Context) {
	postID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(postID)
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	var posts bson.M
	if err := postCollection.FindOne(ctx, bson.M{"_id": docID}).Decode(&posts); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cancel()
	fmt.Println(posts)
	c.JSON(http.StatusOK, posts)
}

// update a username for a post
func UpdateUsername(c *gin.Context) {
	orderID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(orderID)
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	type Username struct {
		Username *string `json:"username"`
	}
	var username Username
	if err := c.BindJSON(&username); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	result, err := postCollection.UpdateOne(ctx, bson.M{"_id": docID},
		bson.D{
			{"$set", bson.D{{"username", username.Username}}},
		},
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cancel()
	c.JSON(http.StatusOK, result.ModifiedCount)
}

// update the post
func UpdatePost(c *gin.Context) {
	postID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(postID)
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	defer cancel()
	var post models.Post
	if err := c.BindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	validationErr := validate.Struct(post)
	if validationErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
		return
	}

	result, err := postCollection.ReplaceOne(
		ctx,
		bson.M{"_id": docID},
		bson.M{
			"username":    post.Username,
			"title":       post.Title,
			"location":    post.Location,
			"price":       post.Price,
			"description": post.Description,
		},
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, result.ModifiedCount)
}

// delete a post given the id
func DeletePost(c *gin.Context) {
	postID := c.Params.ByName("id")
	docID, _ := primitive.ObjectIDFromHex(postID)
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	result, err := postCollection.DeleteOne(ctx, bson.M{"_id": docID})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer cancel()
	c.JSON(http.StatusOK, result.DeletedCount)
}
