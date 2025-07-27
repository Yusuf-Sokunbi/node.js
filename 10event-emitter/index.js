

const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
myFirstEmitter.on('greet', (name) => {
   console.log(`Hello ${name}`);
});


// Emit the 'greet' event with a name
myFirstEmitter.emit('greet', 'YUSUF SOKUNBI');