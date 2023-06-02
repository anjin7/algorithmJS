let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [A, B] = input.map(n=>parseInt(n));
if(A>=B){
    console.log(Math.floor(B/2))
}else{
    console.log(Math.floor(A/2))
}