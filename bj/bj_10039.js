let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let sum = 0;
for(let i=0; i<5; i++){
    if(input[i]<40){
        input[i] = 40;
    }
    sum += parseInt(input[i])
}
let answer = sum/5
console.log(answer)