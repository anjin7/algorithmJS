let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let T = parseInt(input);
let answer = Math.round((T/2)*(T/2));
console.log(answer)