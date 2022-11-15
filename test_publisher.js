// This file creates an MQTT client and connects to the EMQX Cloud Broker
// Example of publishing to a topic and sending messages

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

var client = mqtt.connect('mqtt://broker.emqx.io:1883', options);

// on connect event begin publishing messages every 15 seconds
client.on("connect", function() {
    setInterval(function() {
        var random = Math.random()*50;
        console.log(random);
        if (random < 30) {
            client.publish('test', 'Here is a number: ' + random.toString())
        }
    }),15000; 
});