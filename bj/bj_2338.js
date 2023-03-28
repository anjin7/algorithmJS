let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [A, B] = input.map(n=>BigInt(n));
let answer = "";
answer += A+B+"\n";
answer += A-B+"\n";
answer += A*B
console.log(answer)