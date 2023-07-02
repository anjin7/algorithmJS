// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [4,
`CheddarCheese MozzarellaCheese GoudaCheese GranaPadanoCheese`]
let N = parseInt(input[0])
let arr = input[1].split(' ');
let toppingSet = new Set(arr);
let toppingArr = [...toppingSet];
// console.log(toppingArr)
let cnt = 0;
for(let i=0; i<toppingArr.length; i++){
    let topping = toppingArr[i].split('');
    if(topping.length>=6){
        let judgment = topping.slice(topping.length-6,topping.length);
        let cheese = judgment.join('');
        // console.log(cheese)
        if(cheese === "Cheese") cnt++
    }
};
if(cnt>=4){
    console.log("yummy")
}else{
    console.log("sad")
}