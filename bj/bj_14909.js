// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let input = [-2, 0, 21, 3, 8, 17, 32, -8, 7, 0];
let cnt = 0;
for(let i=0; i<input.length; i++){
    if(parseInt(input[i])>0)cnt++
}
console.log(cnt)