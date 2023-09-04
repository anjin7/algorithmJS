// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [7,
8,
10,
13,
15,
19,
20,
23,
25];
let arr = input.map(n=>parseInt(n));
let sum = arr.reduce((acc, curnt) => acc+curnt, 0);
for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++){
        if((sum -(arr[i]+arr[j]))===100){
            arr.splice(i,1)
            arr.splice(j-1,1)
        }
    }
}
console.log(arr.join('\n'))