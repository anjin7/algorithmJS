// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let input = [38, 24]
let song = parseInt(input[0]);
let mean = parseInt(input[1]);

let min = song*(mean-1) +1;
let max = song*mean;
if(min<max){
    console.log(min)
}else{
    console.log(max)
}