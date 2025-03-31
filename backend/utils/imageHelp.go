package utils

import (
	"encoding/base64"
	"fmt"
)

// Save image and return URL
func SaveImage(base64Str string) (string, error) {
	data, err := base64.StdEncoding.DecodeString(base64Str)
	if err != nil {
		return "", err
	}

	// Generate Base64 image URL instead of saving to a file
	resultImage := fmt.Sprintf("data:image/png;base64,%s", base64.StdEncoding.EncodeToString(data))

	return resultImage, nil
}