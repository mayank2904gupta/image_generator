package models

import (
)

type User struct {
	Name          string             `bson:"name" json:"name" validate:"required"`
	Email         string             `bson:"email" json:"email" validate:"required,email"`
	Password      string             `bson:"password" json:"password" validate:"required"`
	CreditBalance int                `bson:"creditBalance" json:"creditBalance"`
}

func NewUser(user User) User{
	return User{
		Name: user.Name,
		Email: user.Email,
		Password: user.Password,
		CreditBalance: 5,
	}
}
