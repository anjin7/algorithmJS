let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let interest = input[1].split(' ').map(n=>parseInt(n));
let myView = input[2].split(' ').map(n=>parseInt(n));
let sum = interest.reduce((acc,curnt)=>acc+curnt,0);
let intSum = 0;
for(let i=0; i<N; i++){
    if(myView[i]===0){
        intSum += interest[i]
    }
}
console.log(sum);
console.log(intSum);