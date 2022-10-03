// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`1 2`,
`6 10`,
`1 1000000000`,
`0 0`]
for (let i = 0; i < input.length; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    if(arr[0]===0 && arr[1]===0)break;
    let B = arr[0];
    let C = arr[1];
    let A = B*2 - C;
    console.log(A)
}