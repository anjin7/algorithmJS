// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = 7;
let N = parseInt(input);
let card = [];
for(let i=1; i<=N; i++){
    card.push(i);
};
let answer = [];
while(true){
    answer.push(card[0]);
    card.shift();
    card.push(card[0]);
    card.shift();
    if(card.length===0)break;
}
console.log(answer.join(' '))