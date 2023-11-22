let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, F] = input.map(n=>parseInt(n));
let newArr = String(N).split('');
newArr[newArr.length-1]="0";
newArr[newArr.length-2]="0";
let newN = parseInt(newArr.join(''))
let newRemain = newN%F;

if(newRemain!==0){
    let answer = String(F-newRemain).padStart(2,"0");
    console.log(answer)
}else{
    console.log("00")
}