let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
if(N%2===1 || N%4===1 || N%6===1){
    console.log("SK")
}else{
    console.log("CY")
}