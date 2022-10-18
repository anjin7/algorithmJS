// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [2,
  `I am happy today`,
  `We want to win the first prize`];
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let wordArr = [];
    let word = input[i].split(' ');
    for(let j=0; j<word.length; j++){
        let spell = word[j].split('').reverse();
        wordArr.push(spell.join(''))
    }
    console.log(wordArr.join(' '))
}