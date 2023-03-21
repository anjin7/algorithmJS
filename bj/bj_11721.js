// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = "BaekjoonOnlineJudge"
let word = input.split('');
let N = Math.ceil(word.length/10);
for(let i=0; i<N; i++){
    let sliceWord = word.splice(0,10);
    console.log(sliceWord.join(''))
}
