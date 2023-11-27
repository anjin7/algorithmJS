let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, dasom, ...arr] = input.map(n=>parseInt(n));
arr.sort((a,b)=>b-a);
let answer = 0;
while(true){
    let max = Math.max(...arr);
    if(max<dasom)break;
    arr[0] --;
    dasom ++;
    answer ++;
    arr.sort((a,b)=>b-a);
  }
console.log(answer);