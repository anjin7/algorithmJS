// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`2 2`,
`2 3`,
`5 5`,
`1 1`,
`0 0`]
for (let i = 0; i < input.length; i++){
    let friend = input[i].split(' ').map(n=>parseInt(n));
    if(friend[0]===0 && friend[1]===0)break;
    let sum = friend[0]+friend[1];
    console.log(sum)
}