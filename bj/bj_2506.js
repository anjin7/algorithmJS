// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [10,
`1 0 1 1 1 0 0 1 1 0`]
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=>parseInt(n));
let sum=0;
let add=0;
for(let i=0; i<N; i++){
    if(arr[i]===1){
        add++;
        sum += add;        
    }else if(arr[i]===0){
        add=0;
    }
}
console.log(sum)