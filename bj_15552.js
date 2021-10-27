// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input=[5, '1 1', '12 34', '5 500', '40 60', '1000 1000'];

const [N, ...arr] = input;
let result = []
for(let i=0; i<N; i++){
    let num = arr[i].split(' ');
    let sum = Number(num[0])+Number(num[1]);
    result.push(sum);
}
console.log(result.join('\n'));