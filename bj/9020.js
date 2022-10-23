// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [3,8,10,16]
let [T, ...arr] = input.map(n=>parseInt(n));
function isPrime(num){
  if(num===1) return false;    
  for(let i=2; i<parseInt(num); i++){
      if(num%i===0) return false;
  }    
  return true;
};
for(let i=0; i<T; i++){
    let answer = [];
    let num = arr[i];
    for(let j=num-1; j>=num/2; j--){
        if(isPrime(num-j) && isPrime(j)){
            answer.push(j);
            answer.push(num-j);
        }
    }
    answer.sort((a,b)=>a-b)
    let idx = answer.length/2;
    console.log(`${answer[idx-1]} ${answer[idx]}`)
}

// 시간초과