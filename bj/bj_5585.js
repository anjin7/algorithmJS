// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = 380;
let rest = 1000 - parseInt(input);
let cnt = 0;
if(rest>=500){
    cnt += Math.floor(rest/500);
    rest = rest%500
}
if(rest>=100 && rest<500){
    cnt += Math.floor(rest/100);
    rest = rest%100
}
if(rest>=50 && rest<100){
    cnt += Math.floor(rest/50);
    rest = rest%50
}
if(rest>=10 && rest<50){
    cnt += Math.floor(rest/10);
    rest = rest%10
}
if(rest>=5 && rest<10){
    cnt += Math.floor(rest/5);
    rest = rest%5
}
cnt += rest
console.log(cnt)