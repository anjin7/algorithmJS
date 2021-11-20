// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")
const input=[24, 18];

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let i=a;
let j=b;
while (i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
        i = j;
        j = n;
    }
}
console.log(j)
console.log(a*b/j)