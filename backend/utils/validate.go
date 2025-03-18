package utils

import "github.com/go-playground/validator/v10"

var validate = validator.New()

func ValidateStruct(user interface{}) error {
	return validate.Struct(user)
}
