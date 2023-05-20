let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0]);
let sum = 0;
let arr = input[1].split(' ').map(n=>parseInt(n));
for(let i=0; i<arr.length; i++){
    if(arr[i]===T) sum++
}
console.log(sum)