let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,...arr] = input;
for(let i=0; i<parseInt(N); i++){
    let answer = [];
    answer.push(arr[2*i+1]);
    answer.push(arr[2*i]);
    console.log(`Case ${i+1}: ${answer[0]}, ${answer[1]}`)
}