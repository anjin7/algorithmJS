let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let helmet = input[1].split(' ').map(n=>parseInt(n));
let armor = input[2].split(' ').map(n=>parseInt(n));
helmet.sort((a,b)=>b-a);
armor.sort((a,b)=>b-a);
console.log(helmet[0]+armor[0])