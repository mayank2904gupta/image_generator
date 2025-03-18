package config

import (
	"context"
	"fmt"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var db *mongo.Database

func ConnectDB() {
	MONGOURI := os.Getenv("MONGOURI")
	clientOptions := options.Client().ApplyURI(MONGOURI)
	Client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal("Error connecting to MongoDB:", err)
	}

	err = Client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal("Cannot ping MongoDB:", err)
	}
	db = Client.Database("myDb");
	fmt.Println("✅ Connected to MongoDB")
}

func GetCollection(collectionName string) *mongo.Collection {
	return db.Collection(collectionName)
}
