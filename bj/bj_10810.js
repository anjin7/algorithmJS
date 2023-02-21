// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`5 4`,
`1 2 3`,
`3 4 4`,
`1 4 1`,
`2 2 2`]
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let basket = []
for(let i=0; i<N; i++){
    basket.push(0)
};
for(let i=1; i<=M; i++){
    let [a, b, c] = input[i].split(' ').map(n=>parseInt(n));
    for(let j=a; j<=b; j++){
        basket[j-1] = c;
    }
}
console.log(basket.join(' '))