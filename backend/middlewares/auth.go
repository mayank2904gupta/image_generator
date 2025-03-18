package middlewares

import (
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
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