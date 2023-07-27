let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, list, M, ...range] = input;
let arr = list.split(' ').map(n=>parseInt(n));
for(let i=0; i<parseInt(M); i++){
    let [start, end] = range[i].split(' ').map(n=>parseInt(n));
    let sum = 0;
    for(let j=start; j<=end; j++){
        sum += arr[j]
    }
    console.log(sum)
}