// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let input = [23, 40];

let hour = Number(input[0]);
let minute = Number(input[1]);

if(minute>=45){
        console.log(`${hour} ${minute - 45}`);
}else{
    if(hour>0){
        console.log(`${hour-1} ${minute + 15}`);
    }else{
        console.log(`23 ${minute + 15}`)
    }
};