// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
    3,
10,
9,
-5,
]
let [N, ...arr] = input.map(n=>parseInt(n));
for(let i=0; i<N; i++){
    if(arr[i]%2===0){
        console.log(`${arr[i]} is even`)
    }else{
        console.log(`${arr[i]} is odd`)
    }
}