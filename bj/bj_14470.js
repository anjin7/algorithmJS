let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [A, B, C, D, E] = input.map(n=>parseInt(n));
if(A<0){
    console.log(((0-A)*C)+D+(B*E))
}else if(A===0){
    console.log(D+(B*E))
}else{
    console.log((B-A)*E)
}