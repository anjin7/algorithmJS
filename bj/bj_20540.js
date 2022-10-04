// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = "ESTJ";
let YG = input.split('');
let arr = [];
function MBTI(a){
    if(a==="E")return "I"
    if(a==="I")return "E"
    if(a==="S")return "N"
    if(a==="N")return "S"
    if(a==="T")return "F"
    if(a==="F")return "T"
    if(a==="J")return "P"
    if(a==="P")return "J"
}

for(let i=0; i<YG.length; i++){
    arr.push(MBTI(YG[i]))
}
console.log(arr.join(''))