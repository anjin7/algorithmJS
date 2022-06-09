// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => Number(x));

let input = [3, 29, 38, 12, 57, 74, 40, 85, 61];

let max = input[0];
let maxIndex = 0;

for (let i=1; i<9; i++){
    if(max < input[i]){
        max = input[i];
        maxIndex = i;
    };
};

console.log(max);
console.log(maxIndex + 1);