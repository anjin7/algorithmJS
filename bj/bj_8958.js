// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [5,
  [OOXXOXXOOO],
  [OOXXOOXXOO],
  [OXOXOXOXOXOXOX],
  [OOOOOOOOOO],
  [OOOOXOOOOXOOOOX]];

const n = Number(input[0])
for(let i=1; i<=n; i++){
    let arr = input[i].split('');
    let answer=0;
    let cnt=0;
    for(let x of arr){
      if(x==='O'){
          cnt++;
          answer+=cnt;
      }
      else cnt=0;
  }
    console.log(answer);
}