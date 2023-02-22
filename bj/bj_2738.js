// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
    `3 3`,
`1 1 1`,
`2 2 2`,
`0 1 0`,
`3 3 3`,
`4 4 4`,
`5 5 100`,
]
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let rowA = input.slice(1, N+1);
let rowB = input.slice(N+1);
for(let i=0; i<N; i++){
    let arrA = rowA[i].split(' ').map(n=>parseInt(n));
    let arrB = rowB[i].split(' ').map(n=>parseInt(n));
    let answer = [];
    for(let j=0; j<M; j++){
        answer.push(arrA[j]+arrB[j])
    }
    console.log(answer.join(' '))
}