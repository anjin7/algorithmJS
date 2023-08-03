let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [T, ...arr] = input;
for(let i=0; i<parseInt(T); i++){
    let [N, C] = arr[i].split(' ').map(n=>parseInt(n));
    console.log(Math.ceil(N/C))
}