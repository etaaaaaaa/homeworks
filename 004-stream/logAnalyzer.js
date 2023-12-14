const fs = require('fs');
const logFilePath = process.argv[2];

// Adjust encoding if necessary
let logData = fs.readFileSync(logFilePath, 'utf8');

const lines = logData.split('\n');
let totalGames = 0;
let wins = 0;

lines.forEach(line => {
  if (line.includes('Результат')) {
    totalGames++;
    if (line.includes('выиграл')) { 
      wins++;
    }
  }
});

const losses = totalGames - wins;
const winPercentage = totalGames ? ((wins / totalGames) * 100).toFixed(2) : 0;

console.log(`Total games: ${totalGames}`);
console.log(`Wins: ${wins}`);
console.log(`Losses: ${losses}`);
console.log(`Win percentage: ${winPercentage}%`);
