
## Connect to broker.emqx.io and subscribe to the testtopic/# topic:

mqtt sub -t 'testtopic/#' -h 'broker.emqx.io' -v

## Connect to broker.emqx.io and send a message to the testtopic/hello topic

mqtt pub -t 'testtopic/hello' -h 'broker.emqx.io' -m 'from MQTT.js'

