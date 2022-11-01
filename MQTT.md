# MQ Telemetry Transport (MQTT) Overview

This protocol is a set of rules that defines how IoT devices can publish and subscribe to data all over the internet. The protocol is event driven and connects devices using the publish-subscribe (Pub/Sub) pattern. The sender (Publisher) and receiver (Subscriber) communicate via Topics and are decoupled from each other. The connection between them is handled by an MQTT broker. The broker filters all incoming messages and distributes them correctly to the Subscribers. 
