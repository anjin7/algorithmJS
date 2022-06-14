// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = [26];

let num = Number(input);
let sum = 0;
let cnt = 0;
while(true){
    cnt++;
    sum = Math.floor(num/10) + num%10;
    num = (num%10)*10 + sum%10;

    if(Number(input)===num) break
}
console.log(cnt)