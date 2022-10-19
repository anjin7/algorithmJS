const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line)
  })
  .on('close', function () {
    let N = parseInt(input[0]);
    let score = input[1].split(' ').map(n=>parseInt(n));
    score.sort((a,b)=>a-b);
    let min = score[0];
    let max = score[N-1];
    console.log(max-min)
    process.exit();
  });