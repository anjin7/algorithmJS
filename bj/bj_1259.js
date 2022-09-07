// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input =[`121`,
`1231`,
`12421`,
`0`]

for(let i=0; i<input.length; i++){
    if(input[i]==="0")break;
    let num = input[i].split('').join('');
    let reverse = input[i].split('').reverse().join('');
    if(num===reverse){
        console.log("yes")
    }else{
        console.log("no")
    }
}