let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let arr = [];
for(let i=1; i<=M; i++){
    let [A, B, C] = input[i].split(' ');
    arr.push([parseInt(A), parseInt(B), C]);
};
arr.sort((a,b)=>(a[1]-b[1]) || (a[0]-b[0]));
let answer = [];
for(let i=0; i<M; i++){
    answer.push(arr[i][2])
}
console.log(answer.join(''))