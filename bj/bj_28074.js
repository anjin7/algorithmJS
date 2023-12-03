let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let list = new Set(input);
let mobis = ["M", "O", "B", "I", "S"];
let sum = 0;
for(let i=0; i<mobis.length; i++){
    if(list.has(mobis[i])) sum++
};
if(sum===5){
    console.log("YES")
}else{
    console.log("NO")
}

// let answer = true;
// for(let i=0; i<mobis.length; i++){
//     if(list.has(mobis[i])===false){
//         answer = false;
//     }
// }
// if(answer===true){
//     console.log("YES")
// }else{
//     console.log("NO")
// }