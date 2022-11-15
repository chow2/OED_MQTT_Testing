// This file creates an MQTT client and connects to the EMQX Cloud Broker
// Example of subscribing to a topic and receiving messages

const mqtt = require('mqtt')
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  clientId: 'emqx_test',
  username: 'emqx_test',
  password: 'emqx_test',
}
const client  = mqtt.connect('mqtt://broker.emqx.io:1883', options)

// send a message to let broker know we connected
client.on('connect', function () {
  console.log('Connected')
  client.subscribe('test', function (err) {
    if (!err) {
      client.publish('test', 'Hello mqtt')
    }
  })
})

// receive incoming messages from topic
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})