// let input = require('fs').readFileSync('/dev/stdin').toString().split('');
let input = "baekjoon"
let arr = input;
let answer = [];
while(true){
    answer.push(arr.join('').trim());
    arr.shift();
    if(arr.length===0)break
}
answer.sort();
console.log(answer.join('\n').trim())