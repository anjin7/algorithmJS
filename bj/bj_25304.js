// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [260000, 4, `20000 5`, `30000 2`, `10000 6`,`5000 8`]
let [X, N, ...arr] = input;
let answer = 0;
for(let i=0; i<Number(N); i++){
    let numArr = arr[i].split(' ').map(n=>Number(n));
    answer += numArr[0]*numArr[1];
}
if(Number(X)===answer){
    console.log("Yes")
}else{
    console.log("No")
}