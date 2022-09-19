// let input = require('fs').readFileSync('/dev/stdin').toString().split(',');
let input = [10,20,30,50,100]
let sum = 0;
for(let i=0; i<input.length; i++){
    let num = parseInt(input[i])
    sum += num;
}
console.log(sum)