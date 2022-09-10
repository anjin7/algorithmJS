// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input=[3,
`5 10`,
`7 23`,
`42 56`]
let N = parseInt(input[0]);
let getGCD = (num1, num2) => {
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    }
    return num1;
}
for(let i=1; i<=N; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    let gcd = getGCD(arr[0],arr[1]);
    let lcm = arr[0]*arr[1]/gcd;
    console.log(`${lcm} ${gcd}`);
}