package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/mayank2904gupta/image_generator/backend/config"
	"github.com/mayank2904gupta/image_generator/backend/middlewares"
	"github.com/mayank2904gupta/image_generator/backend/routes"
)

func main() {

	// Load environment variables
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	//implementing mongodb driver
	config.ConnectDB()

	// setup gin router
	r := gin.Default()

	// Custom CORS middleware for security
	r.Use(middlewares.SetUpCors())

	// set up routes
	routes.SetUpRoutes(r)
	
	//testing

	// starting the server
	PORT := os.Getenv(("PORT"))
	r.Run(":" + PORT)	
}
