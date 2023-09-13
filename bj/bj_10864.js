let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let answer = [];
for(let i=0; i<N; i++){
    answer.push([])
};
for(let i=1; i<=M; i++){
    let [A, B] = input[i].split(' ').map(n=>parseInt(n));
    answer[A-1].push(B);
    answer[B-1].push(A);
}
for(let i=0; i<N; i++){
    console.log(answer[i].length)
}