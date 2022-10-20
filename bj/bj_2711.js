// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [4,
`4 MISSPELL`,
`1 PROGRAMMING`,
`7 CONTEST`,
`3 BALLOON`]
let T = parseInt(input[0]);
for(let i=1; i<=T; i++){
    let [N, word] = input[i].split(' ');
    let idx = parseInt(N) -1;
    let arr = word.split('');
    arr.splice(idx,1);
    console.log(arr.join(''))
}