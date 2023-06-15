let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(n=>Number(n));
for(let i=0; i<arr.length; i++){
    if(arr[i+1]===999)break;
    console.log((arr[i+1]-arr[i]).toFixed(2))
}