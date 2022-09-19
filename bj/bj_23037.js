// let input = require('fs').readFileSync('/dev/stdin').toString().split('').map(n=>parseInt(n));
let input = [12345]
let sum = 0;
for(let i=0; i<5; i++){
    let num = Math.pow(input[i],5);
    sum += num
}
console.log(sum)