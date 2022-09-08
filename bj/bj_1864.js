// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`(@&`,
`?/--`,
`/(\\`,
`?`,
`#`]
let arr = [];
function translation(word){
    if(word==="-"){
        return 0;
    }else if(word==='\\'){
        return 1;
    }else if(word==='('){
        return 2;
    }else if(word==='@'){
        return 3;
    }else if(word==='?'){
        return 4;
    }else if(word==='>'){
        return 5;
    }else if(word==='&'){
        return 6;
    }else if(word==='%'){
        return 7;
    }else if(word==='/'){
        return -1;
    }
};
for(let i=0; i<input.length; i++){
    if(input[i]==="#")break;
    let stringArr = input[i].split('');
    let leng = stringArr.length;
    let sum = 0;
    for(let j=0; j<leng; j++){
        let num = translation(stringArr[j])
        sum += num*(Math.pow(8,(leng-j-1)))
    }
    arr.push(sum)
}
console.log(arr.join('\n'));