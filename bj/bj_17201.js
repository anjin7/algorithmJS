let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr = input[1].split('').map(n=>parseInt(n));
let answer = 0;
for(let i=1; i<arr.length; i++){
    if(arr[i]===arr[i-1]) answer++
};
if(answer===0){
    console.log("Yes")
}else{
    console.log("No")
}