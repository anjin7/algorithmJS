// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [5,
`10 9 10 9 10`,
`7 20`,]
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=>parseInt(n));
let [B, C] = input[2].split(' ').map(n=>parseInt(n));
let cnt = 0;
for(let i=0; i<N; i++){
    let num = arr[i];
    num  = num - B;
    cnt++;
    if(num>0){
      cnt += Math.ceil(num/C);
    }
}
console.log(cnt)