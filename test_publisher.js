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
        let val0 = Math.floor(Math.random()*100);
        let val1 = Math.floor(Math.random()*100);
        let val2 = Math.floor(Math.random()*100);
        let val3 = Math.floor(Math.random()*100);
        let val4 = Math.floor(Math.random()*100);
        let val5 = Math.floor(Math.random()*100);
        let val6 = Math.floor(Math.random()*100);
        let val7 = Math.floor(Math.random()*100);
        let val8 = Math.floor(Math.random()*100);
        let val9 = Math.floor(Math.random()*100);
        
        //format data
        let l0 = val0.toString() + ", " + printOffsetTime(0);
        let l1 = val1.toString() + ", " + printOffsetTime(1);
        let l2 = val2.toString() + ", " + printOffsetTime(2);
        let l3 = val3.toString() + ", " + printOffsetTime(3);
        let l4 = val4.toString() + ", " + printOffsetTime(4);
        let l5 = val5.toString() + ", " + printOffsetTime(5);
        let l6 = val6.toString() + ", " + printOffsetTime(6);
        let l7 = val7.toString() + ", " + printOffsetTime(7);
        let l8 = val8.toString() + ", " + printOffsetTime(8);
        let l9 = val9.toString() + ", " + printOffsetTime(9);

        // store data in json
        let data = {
            "MeterNum": "1",
            "Data": [
                    l0,
                    l1,
                    l2,
                    l3,
                    l4,
                    l5,
                    l6,
                    l7,
                    l8,
                    l9
            ]
        }

        // publish data 
        client.publish('cameronhowley888', JSON.stringify(data));
        console.log("Successfully published data at: " + printOffsetTime(0));
    }, 10000)
})