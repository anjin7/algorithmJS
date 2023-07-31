// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
  2,
  7,
  `saskatoon`,
  `toronto`,
  `winnipeg`,
  `toronto`,
  `vancouver`,
  `saskatoon`,
  `toronto`,
  3,
  `edmonton`,
  `edmonton`,
  `edmonton`];
let [N, ...arr] = input;
while(true){
    if(arr.length===0){
      break
    }else{
      let M = arr.shift()
      let newArr = arr.splice(0, M);
      let list = new Set(newArr);
      console.log(list.size);
    }
}