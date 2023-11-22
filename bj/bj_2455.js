let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = 0;
let max = 0;
for(let i=0; i<input.length; i++){
    let [A, B] = input[i].split(' ').map(n=>parseInt(n));
    if(i===0) max+=B;
    sum += B;
    sum -= A;
    if(B===0)break;
    if(max<=sum)max=sum
}
console.log(max)