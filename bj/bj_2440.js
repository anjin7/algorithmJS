let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let num = parseInt(input);
let answer = [];
let star = ""
for(let i=0; i<num; i++){
    star += "*"
    answer.push(star);
}
answer.reverse();
console.log(answer.join('\n'))