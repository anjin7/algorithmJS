// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [7,
`KGW`,
`LH`,
`AHC`,
`LKY`,
`DREAM`,
`AA`,
`KTY`]
let [N, ...arr] = input;
let list = arr.filter((name)=> name.length===3);
list.sort();
console.log(list[0])