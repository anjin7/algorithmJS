let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0]);
for(let i=1; i<=T; i++){
    let [A, B] = input[i].split(' ').map(n=>parseInt(n));
    console.log(`Case ${i}: ${A+B}`)
}