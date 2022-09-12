// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = "AB"
function sixteen(s){
    if(s==="0"){
        return 0
    }else if(s==="1"){
        return 1
    }else if(s==="2"){
        return 2
    }else if(s==="3"){
        return 3
    }else if(s==="4"){
        return 4
    }else if(s==="5"){
        return 5
    }else if(s==="6"){
        return 6
    }else if(s==="7"){
        return 7
    }else if(s==="8"){
        return 8
    }else if(s==="9"){
        return 9
    }else if(s==="A"){
        return 10
    }else if(s==="B"){
        return 11
    }else if(s==="C"){
        return 12
    }else if(s==="D"){
        return 13
    }else if(s==="E"){
        return 14
    }else if(s==="F"){
        return 15
    }
}
let num=input.split('');
let leng = num.length;
let sum = 0;
for(let i=0;i<leng;i++){
    sum += sixteen(num[i])*Math.pow(16,leng-i-1)
    console.log(num[i])
    console.log(sixteen(num[i]))
}
console.log(sum)