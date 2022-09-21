// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = `123402`;
let arr = input.split('');
let leng = arr.length;
let half = leng/2;
let arrA = arr.slice(0,half);
let arrB = arr.slice(half,leng);
let sumA = 0;
let sumB = 0;
for(let i=0; i<half; i++){
    sumA += parseInt(arrA[i]);
    sumB += parseInt(arrB[i]);
}
if(sumA===sumB){
    console.log("LUCKY")
}else{
    console.log("READY")
}