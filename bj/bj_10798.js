// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`ABCDE`,
`abcde`,
`01234`,
`FGHIJ`,
`fghij`]
let arr = [];
let lengthArr = [];
let answer = [];
for(let i=0; i<input.length; i++){
    let line = input[i].split('');
    arr.push(line);
    lengthArr.push(line.length)
};
let maxLength = Math.max(...lengthArr)
for(let i=0; i<maxLength; i++){
    for(let j=0; j<input.length; j++){
        if(arr[j][i]){
            answer.push(arr[j][i])
        }
    }
}
console.log(answer.join(''))