package messaging

import (
	"log"

	"github.com/streadway/amqp"
)

var Channel *amqp.Channel

func Init() {
	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")

	if err != nil {
		log.Fatalf("RabbitMQ connection failed: %v", err)
	}

	ch, err := conn.Channel()
	if err != nil {
		log.Fatalf("Failed to open channel: %v", err)
	}

	_, err = ch.QueueDeclare(
		"task_queue", // name
		true,         // durable
		false,        // delete when unused
		false,        // exclusive
		false,        // no-wait
		nil,          // arguments
	)
	if err != nil {
		log.Fatalf("Failed to declare queue: %v", err)
	}

	Channel = ch
	log.Println("✅ Connected to RabbitMQ and declared queue")
}
