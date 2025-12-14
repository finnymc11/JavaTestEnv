//events
const EventEmitter = require('events');
//const emitter = new EventEmitter();

//example url
var url = 'http://example.com/log';

//Logger class
class Logger extends EventEmitter{ //extends combines classes
    //log function
    log(message){
        console.log(message);
        //raise an event
        this.emit('messageLogged', {id:123, url:'http://'});
    }
}

//module.exports.log = log; 
//module.exports.url = url;
module.exports = Logger;