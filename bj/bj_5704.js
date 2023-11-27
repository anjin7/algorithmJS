let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let correct = "abcdefghijklmnopqrstuvwxyz";
for(let i=0; i<input.length; i++){
    if(input[i]==="*")break;
    let word = input[i].split(' ').join('');
    let arr = word.split('');
    let deDuplication = new Set(arr);
    let newArr = [...deDuplication];
    let answer = newArr.sort().join('')
    if(answer===correct){
        console.log("Y")
    }else{
        console.log("N")
    }
}