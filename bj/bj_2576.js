let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n=>parseInt(n));
let oddArr = [];
for(let i=0; i<input.length; i++){
    if(input[i]%2===1){
        oddArr.push(input[i])
    }
}
oddArr.sort((a,b)=>a-b);
let sum = oddArr.reduce((acc, current)=>acc+current,0);
if(oddArr.length===0){
    console.log(-1);
}else{
    console.log(sum);
    console.log(oddArr[0]);
}