
const EventEmitter = require('events');

// Custom EventEmitter class
class CustomEventEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello';

  }
// Register an event listener for the 'greeting' event
  greet(name) {
    this.emit('greeting', `${this.greeting} ${name}`);
  }
 
}   

// Create an instance of CustomEventEmitter
const myCustomEmitter = new CustomEventEmitter();
myCustomEmitter.on('greeting', (input) => {
  console.log( `Greeting event`,input);
});
// Emit the 'greeting' event with a name
myCustomEmitter.greet('YUSUF SOKUNBI');