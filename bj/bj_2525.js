// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input =[13, 40, 80];
    // const arr = input[0].split(' ').map(Number)
    // const hour = arr[0];
    // const minute = arr[1];
    // const time = Number(input[1]);
const hour = input[0];
const minute = input[1];
const time = input[2];
let H = 0;
let M = 0;

if((minute+time)>=60){
    H = hour + (Math.floor((minute+time)/60));
    M = ((minute+time)%60);
}else{
    H = hour;
    M = (minute+time);
};
if(H>=24){
    H = H%24;
};
console.log(H, M);

    // if(hour===22 && (minute+time)>=120){     
    // console.log(`0 ${minute+time-120}`);
    
    // }else if(hour===23 && (minute+time)>=120){      
    //     console.log(`1 ${minute+time-120}`);
        
    // }else if(hour===23 && (minute+time)>=60 && (minute+time)<120){
    //     console.log(`0 ${minute+time-60}`);
        
    // }else{
    //     if((minute+time)>=120){        
    //             console.log(`${hour+2} ${minute+time-120}`);
    //     }else if((minute+time)>=60 && (minute+time)<120){
    //             console.log(`${hour+1} ${minute+time-60}`);
    //     }else{
    //         console.log(`${hour} ${minute+time}`);
    //     }
    // }