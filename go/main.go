package main

import (
    "github.com/MadhulikaPanidepu/iot-dashboard/go/db"
    "github.com/MadhulikaPanidepu/iot-dashboard/go/messaging"
    "github.com/MadhulikaPanidepu/iot-dashboard/go/models"
    "log"
)


func main() {
    db.Init()
    db.DB.AutoMigrate(&models.Task{})
    messaging.Init()
    
    log.Println("🚀 Server initialized. Add API routes here...")
}
