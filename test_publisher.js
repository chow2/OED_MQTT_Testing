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

var client = mqtt.connect('mqtt://broker.hivemq.com');

// on connect event begin publishing messages every 15 seconds
client.on('connect', function() {
    setInterval(function() {
        var random = Math.random()*50;
        client.publish("cameronhowley888", 
            "Random num published to personal channel: "+ random.toString());
        console.log(random);
    }, 1500); 
});