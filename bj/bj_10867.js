// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [10,
`1 4 2 3 1 4 2 3 1 2`];
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=>parseInt(n));
let answer = [];
for(let i=0; i<N; i++){
    if(answer.includes(arr[i])===false){
        answer.push(arr[i])
    }
}
answer.sort((a,b)=>a-b);
console.log(answer.join(' '))