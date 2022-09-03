// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = [72];
let num = Number(input);
let origin = Number(input);
let primNum = 2;
let answer = [];
while(true){
    if(origin===1) break;
    if(num !== 1){
        if(num%primNum === 0){
            answer.push(primNum);
            num = num/primNum;
        }else{
            primNum++
        }
    }else{
        break;
    }
}
if(answer.length !== 0){
    console.log(answer.join('\n'))
}
