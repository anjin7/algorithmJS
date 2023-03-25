// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let input = [3,7]
let [A, B] = input.map(n => parseInt(n));
let arr = [];
for(let i=1; i<=1000; i++){
    for(let j=0; j<i; j++){
      if(arr.length>=B)break
        arr.push(i)
    }
};
let sumArr = arr.slice(A-1, B);
let sum = sumArr.reduce((acc,current)=>acc+current,0);
console.log(sum)