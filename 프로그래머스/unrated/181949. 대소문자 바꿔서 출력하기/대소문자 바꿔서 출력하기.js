const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0]
    const sStr= [...str]
    const re = sStr.map(a => {
        const cur = a.charCodeAt()
        if(cur >= 97) return a.toUpperCase()
        return a.toLowerCase()
    })
    console.log(re.join(""))
});