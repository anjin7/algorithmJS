// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = "level";
let word = input.split('');
let reverse = word.reverse().join('');
if(reverse===input){
    console.log(1)
}else{
    console.log(0)
}