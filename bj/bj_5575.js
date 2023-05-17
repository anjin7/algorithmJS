// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`9 0 0 18 0 0`,
`9 0 1 18 0 0`,
`12 14 52 12 15 30`]
let timeCal = function([a,b,c,x,y,z]){
    let [h, m, s] = [0, 0, 0];
    if(c>z){
        if(b>(y-1)){
            h += (x-a-1);
            m += (60+y-b-1);
            s += (60+z-c);
        }else{
            h += (x-a);
            m += (y-b-1);
            s += (60+z-c);
        }
    }else{
        if(b>y){
            h += (x-a-1);
            m += (60+y-b);
            s += (z-c);
        }else{
            h += (x-a);
            m += (y-b);
            s += (z-c);
        }
    }
    return [h, m, s]
}
for(let i=0; i<3; i++){
  let [a,b,c,x,y,z] = input[i].split(' ').map(n=>parseInt(n));
  let answer = timeCal([a,b,c,x,y,z]);
  console.log(answer.join(' '))
}