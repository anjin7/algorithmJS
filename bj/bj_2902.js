// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = "Knuth-Morris-Pratt";
let arr = input.split('');
let answer = [];
answer.push(arr[0]);
let idxArr = [];
let idx = arr.indexOf("-");
while(idx !== -1){
    answer.push(arr[idx+1]);
    idx = arr.indexOf("-", idx + 1);
}
console.log(answer.join('').trim())