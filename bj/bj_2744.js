let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let answer = [];
for(let i=0; i<input.length; i++){
    if(input[i]===input[i].toUpperCase()){
        answer.push(input[i].toLowerCase())
    }else{
        answer.push(input[i].toUpperCase())
    }
};
console.log(answer.join(''))