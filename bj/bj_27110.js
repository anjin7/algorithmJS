let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=>parseInt(n));
let sum = 0;
for(let i=0; i<arr.length; i++){
    if(N>arr[i]){
        sum += arr[i]
    }else{
        sum += N
    }
}
console.log(sum)