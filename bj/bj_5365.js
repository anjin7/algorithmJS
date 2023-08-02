let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let word = input[1].split(' ');
let answer = [];
let lengthArr = [];
for(let i=0; i<N; i++){
    let spell = word[i].split('');
    lengthArr.push(spell.length)
    if(i===0){
        answer.push(spell[0])
    }else{
        if(lengthArr[i]>=lengthArr[i-1]){
            answer.push(spell[lengthArr[i-1]-1])
        }else{
            answer.push(" ")    
        }
    }
}
console.log(answer.join(''))