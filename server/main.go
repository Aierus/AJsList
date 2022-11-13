package main

import (
	"os"
	"server/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	port := os.Getenv("PORT")

	if port == "" {
		port = "8000"
	}

	router := gin.New()
	router.Use(gin.Logger())

	router.Use(cors.Default())

	// these are the endpoints
	//C
	router.POST("/post/create", routes.AddPost)
	//R
	router.GET("/user/:username", routes.GetPostsByUsername)
	router.GET("/posts", routes.GetPosts)
	router.GET("/post/:id/", routes.GetPostById)
	//U
	router.PUT("/user/update/:id", routes.UpdateUsername)
	router.PUT("/post/update/:id", routes.UpdatePost)
	//D
	router.DELETE("/post/delete/:id", routes.DeletePost)

	//this runs the server and allows it to listen to requests.
	router.Run(":" + port)

}
