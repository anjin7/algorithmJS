let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
let title = new Set(arr);
let titleArr = [...title];
titleArr.sort();
let cntArr = [];
for(let i=0; i<titleArr.length; i++){
    let cnt=0;
    for(let j=0; j<arr.length; j++){
        if(arr[j]===titleArr[i])cnt++
    }
    cntArr.push(cnt)
}
let best = Math.max(...cntArr);
let bestIdx = cntArr.indexOf(best);
console.log(titleArr[bestIdx])