package middlewares

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetUpCors() gin.HandlerFunc{
	return cors.New(cors.Config{
		AllowOrigins:     []string{"https://localhost:5173/"}, // Restrict to production frontend
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin","Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,           // Enable if using cookies/tokens
		MaxAge:           12 * time.Hour, // Cache preflight requests for 12 hours
	})
}