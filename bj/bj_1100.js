// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [
  `.F.F...F`,
  `F...F.F.`,
  `...F.F.F`,
  `F.F...F.`,
  `.F...F..`,
  `F...F.F.`,
  `.F.F.F.F`,
  `..FF..F.`
];
let cnt = 0;
for(let i=0; i<input.length; i++){
    let arr = input[i].split('');
    for(let j=0; j<input.length; j++){
        let even = i+j;
        if(even%2===0){
            if(arr[j]==="F") cnt++
        }
    }
}
console.log(cnt);