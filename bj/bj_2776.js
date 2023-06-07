// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
  1,
  5,
  `4 1 5 2 3`,
  5,
  `1 3 7 9 5`
];
let T = parseInt(input[0]);
for(let i=1; i<=T; i++){
    let answer = [];
    let [N, arrNN, M, arrMM] = input.slice((4*(i-1)+1),((4*i)+1));
    let arrN = new Set(arrNN.split(' ').map(n=>parseInt(n)));
    let arrM = arrMM.split(' ').map(n=>parseInt(n));
    for(let j=0; j<arrM.length; j++){
        if(arrN.has(arrM[j])){
            answer.push(1)
        }else{
            answer.push(0)
        }
    }
    console.log(answer.join('\n'))
}