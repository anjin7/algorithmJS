// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`673`,
`51`,
`1000`,
`99`,
`0`]
for(let i=0; i<input.length; i++){
    if(input[i]==="0")break;
    let numArr = input[i].split('').map(n=>parseInt(n));
    let sum = numArr.reduce((acc, curnt)=>acc+curnt,0);
    while(sum>=10){
      let arr = sum.toString().split('').map(n=>parseInt(n));
      sum = arr.reduce((acc, curnt)=>acc+curnt,0);
    }
    console.log(sum)
}