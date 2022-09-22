// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [2,
`ABCDEFGHIJKLMNOPQRSTUVW`,
`A`]
let N = parseInt(input[0]);
let sum=0;
for(let i=65; i<=90;i++){
    sum+=i
}
for(let i=1; i<=N; i++){
    let arr = input[i].split('');
    let leng = arr.length;
    let answer = sum;
    for(let j=0; j<leng; j++){
        let num = arr[j].charCodeAt(0);
        answer -= num;
    }
    console.log(answer)    
} 