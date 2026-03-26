const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', line => {
      const [a,b] = [...line].join('').split(' ');
      console.log(`a = ${a} \nb = ${b}`)
     });