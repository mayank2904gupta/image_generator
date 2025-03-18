package utils

import (
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func GenerateToken(userEmail string) (string, error) {
	jwtSecretKey := []byte(os.Getenv(("JWT_SECRET_KEY")))
	token := jwt.NewWithClaims(jwt.SigningMethodHS256,jwt.MapClaims{
		"email":userEmail,
		"exp":time.Now().Add(time.Hour*24).Unix(),
	})
	return token.SignedString(jwtSecretKey)
}
