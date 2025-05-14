package main

import (
    "github.com/MadhulikaPanidepu/iot-dashboard/go/db"
    "github.com/MadhulikaPanidepu/iot-dashboard/go/messaging"
    "log"
)


func main() {
    db.Init()
    messaging.Init()

    log.Println("🚀 Server initialized. Add API routes here...")
}
