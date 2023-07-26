let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let answer = [];
for(let i=0; i<input.length; i++){
    if(input[i]==="e"){
        answer.push("ee")
    }else{
        answer.push(input[i])
    }
}
console.log(answer.join(''))