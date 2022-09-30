// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [4,
`2+2`,
`1+2`,
`P=NP`,
`0+0`]
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    if(input[i]==="P=NP"){
        console.log("skipped")
    }else{
        let arr = input[i].split('+').map(n=>parseInt(n));
        let sum = arr[0]+arr[1];
        console.log(sum)
    }
}