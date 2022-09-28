// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [1,
`10001110101000001111010100001110`,
`01110001010111110000101011110001`]

let N = parseInt(input[0]);
let arrA = input[1].split('').map(n=>parseInt(n));
let arrB = input[2].split('').map(n=>parseInt(n));
let arrDel = [];
for(let i=0; i<arrA.length; i++){
    if(arrA[i]===0){
        arrDel.push(1)
    }else if(arrA[i]===1){
        arrDel.push(0)
    }
}
let fileA = String(arrA.join(''));
let fileB = String(arrB.join(''));
let fileDel = String(arrDel.join(''));

if(N%2===0){
    if(fileA===fileB){
        console.log("Deletion succeeded")
    }else{
        console.log("Deletion failed")
    }
}else{
    if(fileB===fileDel){
        console.log("Deletion succeeded")
    }else{
        console.log("Deletion failed")
    }
}