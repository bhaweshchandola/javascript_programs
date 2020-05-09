var events = require('events');

var event_emitter = new events.EventEmitter();

var connect_handler = function connected(){
    console.log("connection successful");

    event_emitter.emit("data_received");
}

event_emitter.on('connection', connect_handler);

event_emitter.on('data_received', function(){
    console.log("data received successfully");
});

event_emitter.emit("connection");

console.log("program ended");