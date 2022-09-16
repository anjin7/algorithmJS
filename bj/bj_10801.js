// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`6 7 5 1 4 10 2 3 8 9`,
`1 10 2 9 4 8 3 7 5 6`]
let arrA = input[0].split(' ').map(n=>parseInt(n));
let arrB = input[1].split(' ').map(n=>parseInt(n));
let scoreA = 0;
let scoreB = 0;
for(let i=0; i<arrA.length; i++){
    if(arrA[i]>arrB[i]){
        scoreA += 1;
    }else if(arrA[i]<arrB[i]){
        scoreB += 1;
    }
}
if(scoreA>scoreB){
    console.log("A")
}else if(scoreA<scoreB){
    console.log("B")
}else{
    console.log("D")
}