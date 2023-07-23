let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let A = parseInt(input[0]);
let B = parseInt(input[2]);
let C = parseInt(input[4]);
if(A+B===C){
    console.log("YES")
}else{
    console.log("NO")
}