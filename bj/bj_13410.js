// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let input = `8 9`;
let [N, K] = input.split(' ').map(n=>parseInt(n));
let arr = [];
for(let i=1; i<=K; i++){
    let num = N*i;
    let numString = String(num);
    let newNum = numString.split('').reverse().join('');
    arr.push(parseInt(newNum))
}
arr.sort((a,b)=>b-a);
console.log(arr[0]);