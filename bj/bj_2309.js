// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
  `20`,
  `7`,
  `23`,
  `19`,
  `10`,
  `15`,
  `25`,
  `8`,
  `13`
];
let arr = input.map(n=>parseInt(n)).sort((a,b)=>a-b);
let answer = [];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        let sum = arr.reduce((acc, curr)=> acc+curr, 0)
        if(sum - arr[i] - arr[j] === 100){
            answer = arr.filter((height)=> height!==arr[i]&&height!==arr[j])
        }
    }
    if(answer.length===7){
        break
    }
};

console.log(answer.join('\n'))