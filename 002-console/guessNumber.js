#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 101);
let lowerBound = 0;
let upperBound = 100;

console.log(`Загадано число в диапазоне от ${lowerBound} до ${upperBound}`);

const askQuestion = () => {
  rl.question('Введите число: ', (answer) => {
    const userGuess = parseInt(answer, 10);

    if (userGuess === secretNumber) {
      console.log(`Отгадано число ${userGuess}`);
      rl.close();
    } else if (userGuess < secretNumber) {
      lowerBound = userGuess;
      console.log('Больше');
      askQuestion();
    } else {
      upperBound = userGuess;
      console.log('Меньше');
      askQuestion();
    }
  });
};

askQuestion();
