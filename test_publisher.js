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
/*
client.on('connect', function() {
    var x = 0;
    setInterval(function() {
        client.publish("cameronhowley888", 
            "Num published to personal channel: "+ x.toString());
        console.log(x);
        x++;
    }, 1500); 
});
*/

// for publishing a json file:
client.on("connect", function(err) {
    if(err) {
        
    }
})