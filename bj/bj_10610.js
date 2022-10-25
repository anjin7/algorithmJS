// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = "80875542"
let arr = input.split('').map(n => parseInt(n));
let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
if(arr.includes(0) && sum%3===0){
    arr.sort((a,b)=>b-a);
    console.log(arr.join(''))
}else{
    console.log(-1)
}