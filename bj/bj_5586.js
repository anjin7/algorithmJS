// let input = require('fs').readFileSync('/dev/stdin').toString().split('');
let input = [`J`,`O`,`I`,`O`,`I`,`O`,`I`,`O`,`I`]
let joi = 0;
let ioi = 0;
for(let i=0; i<input.length-2; i++){
    if(input[i]==="J" && input[i+1]==="O" && input[i+2]==="I"){
        joi++
    }
    if(input[i]==="I" && input[i+1]==="O" && input[i+2]==="I"){
        ioi++
    }
}
console.log(joi);
console.log(ioi);