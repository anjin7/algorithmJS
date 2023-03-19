let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n=>parseInt(n));
let sum = 0;
for(let i=0; i<input.length; i++){
    sum += (input[i]*input[i])
};
console.log(sum%10)