// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [3,
124,
25,
194]
let [T, ...arr] = input.map(n=>parseInt(n));
for(let i=0; i<T; i++){
  let answer = [];
    let rest = arr[i];
    let Quarter=0;
    let Dime=0;
    let Nickel=0;
    let Penny=0;
    if(rest>=25){
        Quarter = Math.floor(rest/25);
        rest = rest%25
    }
    if(rest>=10 && rest<25){
        Dime = Math.floor(rest/10);
        rest = rest%10
    }
    if(rest>=5 && rest<10){
        Nickel = Math.floor(rest/5);
        rest = rest%5
    }
    if(rest<5){
        Penny = rest
    }
    answer.push(Quarter, Dime, Nickel, Penny)
    console.log(answer.join(' '));    
}