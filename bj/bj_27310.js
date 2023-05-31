let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let cnt = input.length;
for(let i=0; i<input.length; i++){
    if(input[i]===":")cnt++
    if(input[i]==="_")cnt += 5
}
console.log(cnt)