let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
for(let i=0; i<parseInt(N); i++){
    let [A, B] = arr[i].split(' ').map(n=>parseInt(n));
    let ratio = A/B;
    console.log(ratio*ratio)
}