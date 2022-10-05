// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`3 4 -1`,
`-1 2 7`,
`5 -1 3`,
`0 0 0`];
let answer = [];
for(let i=0; i<input.length; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    let [a,b,c]=arr;
    if(a===0 && b===0 && c===0)break;
    if(a===0 || b===0 || c===0){
        answer.push(`Triagle #${i+1}\nImpossible.`);
    }else{
        if(a===-1){
            if(c*c<=b*b){
                answer.push(`Triagle #${i+1}\nImpossible.`);
            }else{
                a = Math.sqrt(c*c-b*b).toFixed(3);
                answer.push(`Triagle #${i+1}\na = ${a}`);
            }        
        }else if(b===-1){
            if(c*c<=a*a){
                answer.push(`Triagle #${i+1}\nImpossible.`);
            }else{
                b = Math.sqrt(c*c-a*a).toFixed(3);
                answer.push(`Triagle #${i+1}\nb = ${b}`);
            }
        }else if(c===-1){
            c = Math.sqrt(a*a+b*b).toFixed(3);
            answer.push(`Triagle #${i+1}\nc = ${c}`);
        }
    }
    
}
console.log(answer.join('\n\n'))