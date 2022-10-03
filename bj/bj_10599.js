// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`100 110 180 185`,
`-600 -575 -530 -530`,
`-25 10 72 86`,
`0 0 0 0`]
for (let i = 0; i < input.length; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    if(arr[0]===0 && arr[1]===0 && arr[2]===0 && arr[3]===0)break;
    let min = arr[2]-arr[1];
    let max = arr[3]-arr[0]
    console.log(`${min} ${max}`);
}