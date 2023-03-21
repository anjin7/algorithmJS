// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input=[`5 3`,
`5 4 3 2 1`,
`1 3`,
`2 4`,
`5 5`]
let [num, arr, ...range] = input;
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let numArr = input[1].split(' ').map(n=>parseInt(n));
let answer = [];
let sumArr = [0, numArr[0]];
for(let i=1; i<N; i++){
    sumArr.push(sumArr[i] + numArr[i]);
};
for(let i=0; i<M; i++){
    let [A, B] = range[i].split(' ').map(n=>parseInt(n));
    answer.push(sumArr[B]-sumArr[A-1]);
}
console.log(answer.join('\n'))