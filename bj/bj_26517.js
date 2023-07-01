let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let k = parseInt(input[0]);
let [a, b, c, d] = input[1].split(' ').map(n=>parseInt(n));
if((k*a+b)===(k*c+d)){
    console.log(`Yes ${k*a+b}`);
}else{
    console.log("No")
}