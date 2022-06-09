// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const input =[472, 385];

const num1 = Number(input[0]);
const numarr = input[1].split('');

for(let i=(numarr.length-1); i>=0; i--){
    console.log(num1*(Number(numarr[i])))
};
console.log(num1*(Number(input[1])));