// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = 100;
let N = parseInt(input);
let cnt = 0;
let sec = 1;
for(let i=0; i<input; i++){
  cnt++;
  if(N<sec){
    sec = 1;
    N -= sec;
    sec++;
  }else{
    N -= sec;
    sec++;
  }
  if(N===0) break;
}
console.log(cnt)