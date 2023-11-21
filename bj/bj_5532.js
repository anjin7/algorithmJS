let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [L, A, B, C, D] = input.map(n=>parseInt(n));
let kor = Math.ceil(A/C);
let math = Math.ceil(B/D);
if(kor>=math){
    console.log(L-kor);
}else{
    console.log(L-math);
}