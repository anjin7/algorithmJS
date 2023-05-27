let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let arr = input[i].split('');
    let num = Math.sqrt(arr.length);
    let newArr = [];
    let answer = [];
    
    for(let j=1; j<=num; j++){
        let part = arr.slice((j-1)*num, j*num);
        newArr.push(part)
    };
    for(let j=(num-1); j>=0; j--){
        for(let k=0; k<num; k++){
            answer.push(newArr[k][j])
        }
    }
    console.log(answer.join(''))
}