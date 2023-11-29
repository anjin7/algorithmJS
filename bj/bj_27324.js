let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let [A, B] = input.map(n=>parseInt(n));
if(A===B){
    console.log(1)
}else{
    console.log(0)
}