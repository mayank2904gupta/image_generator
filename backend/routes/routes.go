package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/mayank2904gupta/image_generator/backend/controllers"
	"github.com/mayank2904gupta/image_generator/backend/middlewares"
)

func SetUpRoutes(r *gin.Engine) {
	r.Static("/images", "./images")
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Welcome to Gin Backend!"})
	})
	r.POST("/generate-image",middlewares.UserAuth(),controllers.GenerateImage)
	UserRoutes(r)
}
