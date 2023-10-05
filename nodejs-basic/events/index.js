const { EventEmitter } = require('events'); // TODO 1

const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`);
};

const myEventEmitter = new EventEmitter(); // TODO 2

myEventEmitter.on('birthday', birthdayEventListener); // TODO 3

myEventEmitter.emit('birthday', { name: 'Mark' }); // TODO 4
