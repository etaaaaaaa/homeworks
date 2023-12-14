const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const randomNumber = Math.floor(Math.random() * 2) + 1;

  rl.question('Угадай число 1 или 2: ', (answer) => {
    let result = (parseInt(answer) === randomNumber) ? 'выиграл' : 'проиграл';
    console.log(`Ты написал: ${answer}. Я загадал: ${randomNumber}. Ты ${result}!`);
    logResult(result);
    rl.close();
  });

  function logResult(result) {
    const logFilePath = path.join(__dirname, 'gameLog.txt');
    fs.appendFileSync(logFilePath, `Результат: ${result}\n`, 'utf8');
  }
  