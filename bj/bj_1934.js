// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input =[3, `1 45000`, `6 10`, `13 17`];
const [N, ...arr]=input;

let getGCD = (num1, num2) => {
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    }
    return num1;
}

for(let i=0; i<N; i++){
  let numArr = arr[i].split(' ');
  let a = parseInt(numArr[0]);
  let b = parseInt(numArr[1]);
  let gcd = getGCD(a,b);
  console.log(a*b/gcd)
};