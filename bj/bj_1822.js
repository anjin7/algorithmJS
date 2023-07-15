// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
  `4 3`,
`2 5 11 7`,
`9 7 4`
]
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let arrA = input[1].split(' ').map(n=>parseInt(n));
let arrB = input[2].split(' ').map(n=>parseInt(n));
arrA.sort((a,b)=>a-b);
let setB = new Set(arrB.sort((a,b)=>a-b));
let answer = [];
for(let i=0; i<N; i++){
  if(setB.has(arrA[i])!==true){
    answer.push(arrA[i])
  }
}
if(answer.length===0){
    console.log(0)
}else{
    console.log(answer.length)
    console.log(answer.join(' '))
}