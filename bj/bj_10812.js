// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`10 5`,
`1 6 4`,
`3 9 8`,
`2 10 5`,
`1 3 3`,
`2 6 2`]
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let basket = [];
for(let i=1; i<=N; i++){
    basket.push(i);
};

for(let i=1; i<=M; i++){
    let [a, b, c] = input[i].split(' ').map(n=>parseInt(n));
    let arr = basket.slice(c-1, b);
    basket.splice(c-1, b-c+1);
    basket.splice(a-1, 0, ...arr);
}
console.log(basket.join(' '))