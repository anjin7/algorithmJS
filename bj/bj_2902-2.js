// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = "Knuth-Morris-Pratt";
let arr = input.split('-');
let answer = [];
for(let i=0; i<arr.length; i++){
    let word = arr[i].split('');
    answer.push(word[0])
}
console.log(answer.join('').trim())