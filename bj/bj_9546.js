// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input=[2,1,3]
let N = parseInt(input[0]);
for(let i=1;i<=N;i++){
    let k = parseInt(input[i]);
    let person = 1;
    for(let j=1;j<k;j++){
        person= person*2 +1;
    }
    console.log(person)
}