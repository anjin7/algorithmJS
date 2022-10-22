// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [5,-1,-2,-3,-1,-2]
let N = parseInt(input[0]);
let arr = [];
let sum = 0;
for(let i=1; i<=N; i++){
    arr.push(parseInt(input[i]));
    sum += parseInt(input[i])
};
let sortArr = arr.map(n=>n).sort((a,b)=>a-b);
let aver = Math.round(sum/N);
let mid = sortArr[Math.floor(N/2)];
let mode = 0;
let range = sortArr[N-1] - sortArr[0];

let cntArr = []
for(let i=0; i<N; i++){
    let cnt = arr.filter((el) => arr[i]===el).length;
    cntArr.push(cnt)
}
let modeArr = cntArr.map(n=>n).sort((a,b)=>b-a);

if(modeArr[0]===modeArr[1]){
    let idxArr = [];
    for(let i=0; i<N; i++){
      if(cntArr[i]===modeArr[0]){
        idxArr.push(i)
      }
    }
    let newArr = [];
    for(let i=0; i<idxArr.length; i++){
      let num = idxArr[i];
        if(newArr.includes(arr[num])!==true){
          newArr.push(arr[num])
        }
    }
    newArr.sort((a,b)=>a-b);
    mode=newArr[1];
}else{
    let idx = cntArr.findIndex(modeArr[0]);
    mode = arr[idx];
}
let answer = [aver, mid, mode, range];
console.log(answer.join('\n'))

// 시간초과
