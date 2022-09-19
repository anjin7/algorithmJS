// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [2,
`5 3`,
`7 5`]
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    let leg = arr[0];
    let num = arr[1];
    let T = leg - num;
    let U = (2*num) - leg;
    console.log(`${U} ${T}`);
}