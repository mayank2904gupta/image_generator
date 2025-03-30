package utils

import (
	"encoding/base64"
	"fmt"
	"os"
)

// Save image and return URL
func SaveImage(base64Str string) (string, error) {
	data, err := base64.StdEncoding.DecodeString(base64Str)
	if err != nil {
		return "", err
	}

	// Ensure "images" directory exists
	if _, err := os.Stat("images"); os.IsNotExist(err) {
		os.Mkdir("images", os.ModePerm)
	}

	filename := "images/generated_image.png"
	err = os.WriteFile(filename, data, 0644)
	if err != nil {
		return "", err
	}

	// URL accessible via "/static/"
	imageURL := fmt.Sprintf("http://localhost:8000/images/%s", "generated_image.png")
	return imageURL, nil
}
