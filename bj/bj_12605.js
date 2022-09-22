// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [3,
`this is a test`,
`foobar`,
`all your base`]
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let arr = input[i].split(' ');
    let rev = arr.reverse().join(' ');
    console.log(`Case #${i}: ${rev}`)
}