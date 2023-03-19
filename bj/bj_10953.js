let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0]);
for(let i=1; i<=T; i++){
    let arr = input[i].split(',').map(n=>parseInt(n));
    console.log(arr[0]+arr[1])
}