let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(input.join('\n'))

// 다른 풀이
for(let i=0; i<input.length; i++){
    console.log(input[i])
}