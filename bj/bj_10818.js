// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = [5, ['20 10 35 30 7']];

let N = Number(input[0]);
let arr = input[1].split(' ').map(x => Number(x));

let max = arr[0];
let min = arr[0];

for (let i=1; i < N; i++){
    if(max < arr[i]){
        max = arr[i];
    }
    if(min > arr[i]){
        min = arr[i];
    }
}

console.log(`${min} ${max}`);