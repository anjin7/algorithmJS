let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(n=>parseInt(n));
let answer = [];
for(let i=1; i<=30; i++){
    if(arr.includes(i)!==true){
        answer.push(i)
    }
}
console.log(answer.join('\n'));