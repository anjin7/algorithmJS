let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let N = parseInt(input[0])
let arr = input[1].split(' ').map(n=>parseInt(n))
let getGCD = (num1, num2) => {
    while(num2 > 0){
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    }
    return num1;
}
for(let i=1; i<N; i++){
    let gcd = getGCD(arr[0],arr[i]);
    console.log(`${arr[0]/gcd}/${arr[i]/gcd}`);
}