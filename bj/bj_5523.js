let input = [5,
`20 20`,
`3 95`,
`60 59`,
`40 40`,
`20 19`]
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let N = parseInt(input[0]);
let cntA = 0;
let cntB = 0;
for(let i=1; i<=N; i++){
    let arr = input[i].split(' ').map(n => parseInt(n));
    let scoreA = arr[0];
    let scoreB = arr[1];
    if(scoreA>scoreB){
        cntA++
    }else if(scoreB>scoreA){
        cntB++
    }
}
console.log(`${cntA} ${cntB}`);