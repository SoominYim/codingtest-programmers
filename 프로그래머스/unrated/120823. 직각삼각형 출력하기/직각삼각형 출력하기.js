const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
   
}).on('close', function () {
    const n = Number(input[0])
    let log = ''
    for(let i = 1; i<=n; i++){
        for(let j = 1 ; j <= i; j++){
            log+='*'
        }
        log+='\n'
    }
    console.log(log)
});