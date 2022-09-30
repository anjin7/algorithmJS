// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let input = [11, 1];
let N = parseInt(input[0]);
let d = parseInt(input[1]);
let arr = [];
let cnt = 0;
for(let i=1; i<=N; i++){
    arr.push(i)
};
let num = String(arr.join(''));
let numArr = num.split('').map(n=>parseInt(n));
for(let i=0; i<num.length; i++){
    if(numArr[i]===d)cnt++
}
console.log(cnt)