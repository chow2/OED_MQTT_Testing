// This file creates an MQTT client and connects to the HiveMQ Cloud Broker
// Example of publishing to a topic

// helper function for formatting date in simulated meter data
function printOffsetTime(s) {
    // create date object
    let date_ob = new Date();

    // offset the date by s
    date_ob.setSeconds(date_ob.getSeconds() + s);

    // get values
    let year = date_ob.getFullYear();
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let day = ("0" + date_ob.getDate()).slice(-2);
    let hour = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = ('0' + date_ob.getSeconds()).slice(-2);

    // return formatted string
    return `${hour}:${minutes}:${seconds} ${month}/${day}/${year}`;
}

//let jsonData = require('./test_data.json');

const mqtt = require('mqtt');

// set options for emqx broker
/* 
const options = {
    // Clean session
    clean: true,
    connectTimeout: 4000,
    // Auth
    clientId: 'emqx_test',
    username: 'emqx_test', 
    password: 'emqx_test',
  }
*/

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

// simulate meter sending data every 15 secs:
client.on("connect", function() {
    setInterval(function() {
        // generate random usage readings
        var usage_readings = [];
        for (let i = 0; i < 10; i++) {
            usage_readings.push(Math.floor(Math.random()*100));
        }
        
        //format data
        var lines = [];
        for (let i = 0; i < 10; i++) {
            lines.push(usage_readings[i] + ", " + printOffsetTime(i));
        }

        // store data in json
        let data = {
            "MeterNum": "1",
            "Data": [
                    lines[0],
                    lines[1],
                    lines[2],
                    lines[3],
                    lines[4],
                    lines[5],
                    lines[6],
                    lines[7],
                    lines[8],
                    lines[9],
            ]
        }

        // publish data 
        client.publish('cameronhowley888', JSON.stringify(data));
        console.log("Successfully published data at: " + printOffsetTime(0));
    }, 10000)
})