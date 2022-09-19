// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [5,
`22 3`,
`15 5`,
`99 8`,
`7 4`,
`101 5`,]
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    let candy = arr[0];
    let divide = arr[1];
    let q = Math.floor(candy/divide);
    let r = candy%divide;
    console.log(`You get ${q} piece(s) and your dad gets ${r} piece(s).`)
}