package middlewares

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/mayank2904gupta/image_generator/backend/config"
	"github.com/mayank2904gupta/image_generator/backend/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func UserAuth() gin.HandlerFunc{
	return func (c *gin.Context)  {
		tokenString := c.GetHeader("Authorization")
		if tokenString == "" {
            c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "Not Authorized, Login Again"})
            c.Abort()
            return
        }
		tokenString = strings.TrimPrefix(tokenString, "Bearer ")
		claims,err := verifyToken(tokenString)
		if err != nil {
            c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "Invalid Token"})
            c.Abort()
            return
        }
		if email, ok := claims["email"].(string); ok {
            c.Set("email", email)
        }
		c.Next()
	}
}

func verifyToken(tokenString string)(jwt.MapClaims, error) {
	secretKey := []byte(os.Getenv("JWT_SECRET_KEY"))
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
	   return secretKey, nil
	})
   
	if err != nil {
	   return nil,err
	}
   
	 if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
        return claims, nil
    }

    return nil, fmt.Errorf("invalid token")
 }

 func RestoreSession(c *gin.Context) {
	tokenString := c.GetHeader("Authorization")
	if tokenString == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "No token provided"})
		c.Abort()
		return
	}

	tokenString = strings.TrimPrefix(tokenString, "Bearer ")
	claims, err := verifyToken(tokenString)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "Invalid or expired token"})
		c.Abort()
		return
	}

	email, ok := claims["email"].(string)
	if !ok || email == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"success": false, "message": "Invalid token structure"})
		c.Abort()
		return
	}

	var user models.User
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	collection := config.GetCollection("users")
	err = collection.FindOne(ctx, bson.M{"email": email}).Decode(&user)

	if err != nil {
		if err == mongo.ErrNoDocuments {
			c.JSON(http.StatusNotFound, gin.H{"success": false, "message": "User not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"success": false, "message": "Database error"})
		}
		c.Abort()
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"user": gin.H{"name": user.Name},
	})

}
