package main

import (
	"log"

	"github.com/MadhulikaPanidepu/iot-dashboard/db"
	"github.com/MadhulikaPanidepu/iot-dashboard/messaging"
	"github.com/MadhulikaPanidepu/iot-dashboard/models"
	"github.com/MadhulikaPanidepu/iot-dashboard/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	db.Init()
	// Auto migrate Task model
	db.DB.AutoMigrate(&models.Task{})

	messaging.Init()
	r := gin.Default()

	// Register task routes
	routes.RegisterTaskRoutes(r)

	log.Println("🚀 Server running at http://localhost:8080")
	r.Run(":8080")

}
