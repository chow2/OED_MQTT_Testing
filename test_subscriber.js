// This file creates an MQTT client and connects to the EMQX Cloud Broker
// Example of subscribing to a topic and receiving messages

const mqtt = require('mqtt');
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  clientId: 'emqx_test',
  username: 'emqx_test',
  password: 'emqx_test',
}
var client  = mqtt.connect('mqtt://broker.hivemq.com');

// connect to broker
client.on('connect', function () {
  client.subscribe("cameronhowley888");
  console.log("Client has subscribed successfully");
});
  /* parse string message
  client.on('message', function (topic, message) {
    console.log(message.toString());
  });
  */ 
  // parse json file
  client.on('message', function (topic, payload) {
    const obj = JSON.parse(payload.toString()) // payload is a buffer
    console.log(obj)
  })