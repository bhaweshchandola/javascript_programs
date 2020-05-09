var events = require('events');
var event_emitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log("listener1 executed");
}

var listener2 = function listener2(){
    console.log("listener2 executed");
}

event_emitter.addListener('connection', listener1);

event_emitter.on('connection', listener2);

event_emitter.emit('connection');

var event_listeners = event_emitter.listenerCount('connection');
console.log(event_listeners + "listener listening")

event_emitter.removeListener('connection',  listener1);

var event_listeners = event_emitter.listenerCount('connection');
console.log(event_listeners + "listener listening")
