let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arrS = input[0].split(' ').map(n=>parseInt(n));
let arrT = input[1].split(' ').map(n=>parseInt(n));
let sumS = arrS.reduce((acc,curnt)=>acc+curnt,0);
let sumT = arrT.reduce((acc,curnt)=>acc+curnt,0);
if(sumS>=sumT){
    console.log(sumS)
}else{
    console.log(sumT)
}