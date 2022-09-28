let input = [`@===@==@=@==(^0^)==@=@===@`]
// let input = require('fs').readFileSync('/dev/stdin').toString().split(`(^0^)`);
let left = input[0].split('');
let right = input[1].split('');
let cntL=0;
let cntR=0;
for(let i=0; i<left.length; i++){
    if(left[i]==="@")cntL++
}
for(let i=0; i<right.length; i++){
    if(right[i]==="@")cntR++
}
console.log(`${cntL} ${cntR}`)