// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
    `2`,
`6 12 10`,
`30 50 72`,
]
let T = parseInt(input[0]);
for(let i=1; i<=T; i++){
    let [H, W, N] = input[i].split(' ').map(n=>parseInt(n));
    let floor = N%H;
    let roomNum = Math.floor(N/H) +1;
    if(floor===0){
        floor = H;
        roomNum = N/H;
    }
    if(roomNum>=10){
        console.log(`${floor}${roomNum}`)
    }else{
        console.log(`${floor}0${roomNum}`)
    }
}