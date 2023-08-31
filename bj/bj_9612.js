let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
let listWord = new Set(arr);
let arrWord = [...listWord];
arrWord.sort().reverse();
let numArr = [];
for(let i=0; i<arrWord.length; i++){
    numArr.push(0)
}
for(let i=0; i<parseInt(N); i++){
    for(let j=0; j<arrWord.length; j++){
        if(arr[i]===arrWord[j]){
            numArr[j]++
        }
    }
}
let maxNum = Math.max(...numArr);
let maxIdx = numArr.indexOf(maxNum);
let maxWord = arrWord[maxIdx];
console.log(`${maxWord} ${maxNum}`)