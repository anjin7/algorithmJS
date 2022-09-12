// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`yellow`,
  `violet`,
  `red`
];
function Value(color) {
    if(color==="black"){
        return 0
    }else if(color==="brown"){
        return 1
    }else if(color==="red"){
        return 2
    }else if(color==="orange"){
        return 3
    }else if(color==="yellow"){
        return 4
    }else if(color==="green"){
        return 5
    }else if(color==="blue"){
        return 6
    }else if(color==="violet"){
        return 7
    }else if(color==="grey"){
        return 8
    }else if(color==="white"){
        return 9
    }
}
let num1 = Value(input[0]);
let num2 = Value(input[1]);
let num3 = Math.pow(10, Value(input[2]));

let answer = (num1*10+num2)*(num3)
console.log(answer)