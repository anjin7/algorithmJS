let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=>parseInt(n));
arr.sort((a,b)=>a-b)
let answer = [];
answer.push(arr[0])
for(let i=1; i<N; i++){
    if(arr[i]>arr[i-1]){
        answer.push(arr[i])
    }else{
        if(answer.indexOf(arr[i])===answer.lastIndexOf(arr[i])){
            answer.push(arr[i])
        }
    }
}
console.log(answer.length)