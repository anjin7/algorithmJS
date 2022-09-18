// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`0 1 0 1`,
`1 1 1 0`,
`0 0 1 1`]
function Play(num) {
    if(num===3){
        return "A"
    }else if(num===2){
        return "B"
    }else if(num===1){
        return "C"
    }else if(num===0){
        return "D"
    }else if(num===4){
        return "E"
    }
}
for(let i=0; i<3; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    let sum = 0;
    for(let j=0; j<4; j++){
        sum += arr[j]
    }
    console.log(Play(sum))
}