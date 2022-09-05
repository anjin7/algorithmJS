// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(n=>parseInt(n));
let input = [`120`, `5611`, `100`, `0`];
let answer = []
for(let i=0; i<input.length; i++){
    if(input[i]==="0") break;
    let cnt = 2;
    let numArr = input[i].split('');
    for(let j=0; j<numArr.length; j++){
        if(numArr[j]==="1"){
            cnt+=2;
        }else if(numArr[j]==="0"){
            cnt+=4;
        }else{
            cnt+=3;
        }
        
    }
    cnt+=(numArr.length-1)
    answer.push(cnt)
}
console.log(answer.join('\n'))