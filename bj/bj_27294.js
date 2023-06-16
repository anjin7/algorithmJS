let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [T, S] = input.map(n=>parseInt(n));
if(T<=11 || T>16 || S===1){
    console.log(280)
}else{
    console.log(320)
}