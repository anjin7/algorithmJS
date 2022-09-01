// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [4 ,`0 0 13 40 0 37`, `0 0 3 0 7 4`, `1 1 1 1 1 5`, `0 0 8 0 4 2`];
let [N, ...arr] = input;

for(let i=0; i<N; i++){
    let coord = arr[i].split(' ').map(n=>parseInt(n));
    [a, b, c, x, y, z] = coord;
    let r = Math.sqrt((a-x)*(a-x) + (b-y)*(b-y));

    if(r===0){
      if(c===z){
        console.log(-1)
      }else{
        console.log(0)
        // console.log("동심원")
      }
    }else{
      if(r>Math.abs(c-z) && r<(c+z)){
        console.log(2)
      }else if(r===(c+z)){
        console.log(1)
        // console.log("외접")
      }else if(r>(c+z)){
        console.log(0)
        // console.log("외부")
      }else if(r===Math.abs(c-z)){
        console.log(1)
        // console.log("내접")
      }else{
        console.log(0)
        // console.log("내부")
      }
    }
}