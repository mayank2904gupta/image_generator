package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/mayank2904gupta/image_generator/backend/controllers"
	"github.com/mayank2904gupta/image_generator/backend/middlewares"
)

func UserRoutes(r *gin.Engine) {
	userRoutes := r.Group("/user")
	{
		userRoutes.POST("/register",controllers.RegisterUserHandler)
		userRoutes.POST("/login",controllers.LoginUserHandler)
		userRoutes.GET("/credits",middlewares.UserAuth(),controllers.UserCredits)
	}
}