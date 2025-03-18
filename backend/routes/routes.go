package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func SetUpRoutes(r *gin.Engine) {
	r.Static("/static", "./static")
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Welcome to Gin Backend!"})
	})
	UserRoutes(r)
}