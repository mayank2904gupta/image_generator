package controllers

import (
	"bytes"
	"context"
	"encoding/base64"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/mayank2904gupta/image_generator/backend/config"
	"github.com/mayank2904gupta/image_generator/backend/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GenerateImage(c *gin.Context) {
	apiKey := os.Getenv("CLIPDROP_API_KEY")
	fmt.Println("Using API Key:", apiKey)

	var requestBody struct {
		Email  string `bson:"email" json:"email" validate:"required,email"`
		Prompt string `bson:"prompt" json:"prompt"`
	}

	if err := c.ShouldBindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"success": false, "message": "Invalid request, provide email and prompt"})
		return
	}

	var user models.User
	collection := config.GetCollection("users")
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	err := collection.FindOne(ctx, bson.M{"email": requestBody.Email}).Decode(&user)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			c.JSON(http.StatusUnauthorized, gin.H{
				"success": false, "message": "Invalid authorization,login again",
			})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"success": false, "message": "database error"})
		return
	}
	if user.CreditBalance < 1 {
		c.JSON(http.StatusPaymentRequired, gin.H{"success": false, "message": "insufficient Balance please recharge"})
		return
	}
	imageData, err := callClipdropAPI(requestBody.Prompt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate image"})
		return
	}
	base64Image := base64.StdEncoding.EncodeToString(imageData)
	resultImage := fmt.Sprintf("data:image/png;base64,%s", base64Image)

	newBalance := user.CreditBalance - 1
	update := bson.M{"$set": bson.M{"creditBalance": newBalance}}

	updateCtx, updateCancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer updateCancel()
	_, err = collection.UpdateOne(updateCtx, bson.M{"email": user.Email}, update)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"success": false, "message": "Failed to update balance"})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"message": "Image generated successfully",
		"image":   resultImage,
		"credits": newBalance,
	})
}

func callClipdropAPI(prompt string) ([]byte, error) {
	var requestBody bytes.Buffer
	writer := multipart.NewWriter(&requestBody)
	_ = writer.WriteField("prompt", prompt)
	writer.Close()

	req, err := http.NewRequest("POST", "https://clipdrop-api.co/text-to-image/v1", &requestBody)
	if err != nil {
		return nil, err
	}
	req.Header.Set("x-api-key", os.Getenv("CLIPDROP_API_KEY"))
	req.Header.Set("Content-Type", writer.FormDataContentType())

	client := http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	return body, nil
}
