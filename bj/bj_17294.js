let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let arr = input.map(n=>parseInt(n));
if(arr.length<3){
    console.log("◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!")
}else{
    let gapArr = [];
    for(let i=0; i<(arr.length-1); i++){
        let gap = arr[i+1]-arr[i];
        if(gapArr.includes(gap)!==true){
            gapArr.push(gap)
        }
    }
    if(gapArr.length===1){
        console.log("◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!")
    }else{
        console.log("흥칫뿡!! <(￣ ﹌ ￣)>")
    }
}