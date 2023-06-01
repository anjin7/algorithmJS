// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
  5,
1,
2,
5,
6,
7,
]
let [T, ...arr] = input.map(n=>parseInt(n));
for(let i=0; i<T; i++){
    let time = 0;
    for(let j=1; j<arr[i]; j++){
        if(j*(j+1)>arr[i])break
        if(j*(j+1)<=arr[i])time++
    }
    console.log(time)
}