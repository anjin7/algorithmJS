let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = 0;
for(let i=0; i<input.length; i++){
    if(input[i]==="-1")break
    sum += parseInt(input[i]);
}
console.log(sum)