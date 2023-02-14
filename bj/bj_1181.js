// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [13,
`but`,
`i`,
`wont`,
`hesitate`,
`no`,
`more`,
`no`,
`more`,
`it`,
`cannot`,
`wait`,
`im`,
`yours`]

let [N, ...arr] = input;
let lengthArr = [];
let answer = [];
for(let i=0; i<N; i++){
    lengthArr.push(arr[i].length)
}
let maxLength = Math.max(...lengthArr);

for(let i=1; i<=maxLength; i++){
  let idx = lengthArr.indexOf(i);
  let idxArr = [];
  while(idx !== -1){
    idxArr.push(idx);
    idx= lengthArr.indexOf(i, idx+1)
  };

  let sortArr = [];
  for(let j=0; j<idxArr.length; j++){
    if(sortArr.includes(arr[idxArr[j]])!==true){
      sortArr.push(arr[idxArr[j]])
    }
  };
  sortArr.sort();
  answer.push(...sortArr)
}
console.log(answer.join('\n'))