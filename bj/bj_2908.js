let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let [a, b, c] = input[0].split('').map(n=>Number(n));
let [x, y, z] = input[1].split('').map(n=>Number(n));
let A = (100*c + 10*b + a);
let B = (100*z + 10*y + x);

if(A>B){
    console.log(A);
}else{
    console.log(B);
}