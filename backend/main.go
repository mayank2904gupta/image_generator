package main

import (
	"log"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/mayank2904gupta/image_generator/backend/config"
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
	r.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:5173"}, // Change if deploying
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Content-Type", "Authorization"},  // ✅ Allow Authorization header
        ExposeHeaders:    []string{"Content-Length", "Authorization"},
        AllowCredentials: true,
        MaxAge:           12 * time.Hour,
    }))

	// set up routes
	routes.SetUpRoutes(r)
	
	//testing

	// starting the server
	PORT := os.Getenv(("PORT"))
	r.Run(":" + PORT)	
}
