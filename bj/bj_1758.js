let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input.map(n=>parseInt(n));
let sum = 0;
arr.sort((a,b)=>b-a);
for(let i=0; i<N; i++){
    let tip = arr[i]-(i);
    if(tip>0){
        sum += tip;
    }
}
console.log(sum);