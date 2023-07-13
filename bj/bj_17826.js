let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[0].split(' ').map(n=>parseInt(n));
let hong = parseInt(input[1]);
let rank = arr.indexOf(hong);
if(rank>=0 && rank<5){
    console.log("A+")
}else if(rank>=5 && rank<15){
    console.log("A0")
}else if(rank>=15 && rank<30){
    console.log("B+")
}else if(rank>=30 && rank<35){
    console.log("B0")
}else if(rank>=35 && rank<45){
    console.log("C+")
}else if(rank>=45 && rank<48){
    console.log("C0")
}else if(rank>=48 && rank<=49){
    console.log("F")
}