// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [60, 100];

let num1 = parseInt(input[0]);
let num2 = parseInt(input[1]);
let arr = [];

function isPrime(num){
  if(num===1) return false;
  for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
      if(num%i===0) return false;
  }
  return true;
};

for(let i=num1; i<=num2; i++){
    if(isPrime(i)) arr.push(i);
};

let sum = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i];
}

if(arr.length === 0){
    console.log(-1);
}else{
    console.log(sum);
    console.log(arr[0]);
}