# MQ Telemetry Transport (MQTT) Overview

MQTT is an [ISO standard](https://www.iso.org/standard/68562.html) publish-subscribe based messaging protocol that is designed for communications between small sensors and mobile devices that may have limited or unreliable bandwidth. The protocol is event driven and connects devices using the publish-subscribe (Pub/Sub) pattern. The sender (Publisher) and receiver (Subscriber) communicate via Topics and are decoupled from each other. The connection between them is handled by an MQTT broker. The broker filters all incoming messages and distributes them to their specified topic. These topics can be subscribed to by clients who will receive the messages at an interval. 

## Research:
* traditionally OPC used for device to network communications, however there were persistent issues with security -- MQTT was created to solve these issues
* it is possible use single client to subscribe to multiple topics
* OED data pipeline can handle data with only end dates, but prefer each read value to have a time range associated
* ideally when connecting to a meter's topic for the first time, we'd like a way to get all historical data on a date range
# Big Questions:
* how to get name of meter and usage collecting in?
* does MQTT offer any transmission receipt file?
  * 
* what happens with transmission failure in MQTT? 
    * publisher can tell broker to keep the last message on that topic by setting the [retained message flag](http://www.steves-internet-guide.com/mqtt-retained-messages-example/) but otherwise as far as energy meters go the meter or broker must store the data or it will be lost 
* is there a way to get old data?
    * will most likely have to manually get the data from the owner when we set up the connection
    * could set up a driver that gets data from meter and stores it in OED database
    * or broker could use 3rd party external database that stores all transmissions uploaded
* what different formats are usage data sent in?
  * short answer all different kinds of formats
  * most commonly: json file with timestamp, value, and maybe a data integrity measure
  * Sparkplug B: provides a consistent way for software providers and equiment manufacturers to share contextual data, not super popular right now but gaining traction
* does the admin have to input what unit the data is measured in or do we get unit somehow?
  * 
* 
