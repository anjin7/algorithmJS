// const input = require('fs').readFileSync('/dev/stdin').toString().split('');
let input=[UNUCIC];

let answer=0;
for(let x of input){
    if(x==='A' || x==='B' || x==='C'){
        answer+=3;
    }else if(x==='D' || x==='E' || x==='F'){
        answer+=4;
    }else if(x==='G' || x==='H' || x==='I'){
        answer+=5;
    }else if(x==='J' || x==='K' || x==='L'){
        answer+=6;
    }else if(x==='M' || x==='N' || x==='O'){
        answer+=7;
    }else if(x==='P' || x==='Q' || x==='R' || x==='S'){
        answer+=8;
    }else if(x==='T' || x==='U' || x==='V'){
        answer+=9;
    }else if(x==='W' || x==='X' || x==='Y' || x==='Z'){
        answer+=10;
    }
}
console.log(answer);