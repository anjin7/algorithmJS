let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let time = input.map(n=>parseInt(n)).reduce((acc,current)=>acc+current,0);
let answer = "";
answer += Math.floor(time/60) + "\n";
answer += (time%60);
console.log(answer)