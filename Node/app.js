//hello world
function sayHello(name){
    console.log('hello ' + name);
}
sayHello('Finbar');

//module
console.log(module);

//using logger module

const log = require('./logger');
//console.log(logger);
//logger.log('message');
log('message');

//built-in module (no '/' required)
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//using os module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(totalMemory)
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)