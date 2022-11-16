# MQ Telemetry Transport (MQTT) Overview

MQTT is an [ISO standard](https://www.iso.org/standard/68562.html) publish-subscribe based messaging protocol that is designed for communications between small sensors and mobile devices that may have limited or unreliable bandwidth. The protocol is event driven and connects devices using the publish-subscribe (Pub/Sub) pattern. The sender (Publisher) and receiver (Subscriber) communicate via Topics and are decoupled from each other. The connection between them is handled by an MQTT broker. The broker filters all incoming messages and distributes them to their specified topic. These topics can be subscribed to by clients who will receive the messages at an interval. 

## Plan:
* can use single client to subscribe to multiple topics
* ideally when connecting to a meter's topic for the first time, we'd like a way to get all historical data on a date range
* meeting with Tom Wooten on 11/17 to discuss setting up a connection to and collecting data from a real usage meter 
* this might answer these questions:
  * how to get name of meter and usage collecting in?
  * is there a welcome packet?
  * does MQTT offer any transmission receipt file?
  * what happens with transmission failure in MQTT? - publisher can tell broker to keep the last message on that topic by setting the [retained message flag](http://www.steves-internet-guide.com/mqtt-retained-messages-example/)
  * is there a way to get old data?
  * what different formats are usage data sent in?
  * does the admin have to input what unit the data is measured in or do we get unit somehow?
