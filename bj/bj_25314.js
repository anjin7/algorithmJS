let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let repeat = N/4;
let answer = "";
for(let i=0; i<repeat; i++){
    answer += "long "
}
console.log(answer+"int")