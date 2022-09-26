// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [3,
`1 2 3`];
let N = parseInt(input[0]);
let guest = input[1].split(' ').map(n=>parseInt(n));
let arr = [];
let cnt = 0;
for(let i=0; i<N; i++){
    if(arr.includes(guest[i])!==true){
        arr.push(guest[i]);
    }else{
        cnt ++
    }
}
console.log(cnt)