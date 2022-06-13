// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [10, 1, 3, 5, 4, 0, 0, 7, 0, 0, 6];

let [K, ...arr] = input.map(Number);
let answer = [];
for(let i=0; i<K; i++){
    if(arr[i]===0){
        answer.pop();
    }else{
        answer.push(arr[i]);
    }
}
let sum = answer.reduce((init, add) => init + add, 0);
console.log(sum)