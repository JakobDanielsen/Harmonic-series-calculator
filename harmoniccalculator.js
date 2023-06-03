const { log } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your base frequency?: ', (freq) => {
    rl.question('How many outputs do you want?: ', (outputs) => {
    for (let i = 0; i <= parseInt(outputs)-1; i++) {
       console.log(freq*(i+1));
    }
  rl.close();
    });
});
