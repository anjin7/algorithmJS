// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = 21;

const r = Number(input);
let Eu = r * r * (Math.PI);
let Tx = 2 * r * r;


console.log(Eu.toFixed(6));
console.log(Tx.toFixed(6));