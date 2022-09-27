// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [10,
40,
30,
60,
30]

let arr = input.map(n=>parseInt(n)).sort((a,b)=>a-b);
let sum = 0;
for(let i=0; i<5; i++){
    sum += arr[i]
}
let average = sum / 5;
let answer = [average, arr[2]]
console.log(answer.join('\n'))