let input = [`10 5 2233`,
`1601 90100 13009 802`,
`50000000`,
`301 7654321`,
`210`]
let arr = [];
for(let i=0; i<input.length; i++){
    let list = input[i].split(' ');
    for(let j=0; j<list.length; j++){
        let revNum = list[j].split('').reverse().join('')
        if(i===0 && j===0){
        }else{
            arr.push(parseInt(revNum))
        }        
    }    
}
arr.sort((a,b)=>a-b);
console.log(arr.join('\n'))

// 왜 틀렸다고 나오지...