// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`800`,
`700`,
`900`,
`198`,
`330`]
let [burger1,burger2,burger3,coke,cider] = input.map(n=>parseInt(n));
let minBurger = Math.min(burger1, burger2, burger3);
let minDrink = Math.min(coke, cider);
console.log(minBurger+minDrink-50);