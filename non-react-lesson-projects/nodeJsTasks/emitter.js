// using ES6 imports instead of Nodejs require
import * as events from 'node:events';

let listenerCallback = (data) => {
  console.log('Celebrate ' + data);
};

const myEmitter = new events.EventEmitter();

myEmitter.on('celebration', listenerCallback);

myEmitter.emit('celebration', 'HUZZAH!');

process.stdin.on('data', (userInput) => {
  let input = userInput.toString().trim();
  console.log('You typed: ', input);
});
