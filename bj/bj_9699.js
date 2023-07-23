let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
for(let i=0; i<parseInt(N); i++){
    let list = arr[i].split(' ').map(n=>parseInt(n));
    let max = Math.max(...list);
    console.log(`Case #${i+1}: ${max}`)
}