// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [4,
`HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH`,
`TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT`,
`HHTTTHHTTTHTHHTHHTTHTTTHHHTHTTHTTHTTTHTH`,
`HTHTHHHTHHHTHTHHHHTTTHTTTTTHHTTTTHTHHHHT`];
let [N, ...arr] = input;

for(let i=0; i<parseInt(N); i++){
    let coin = arr[i].split('');
    let leng = coin.length;

    let ttt=0;
    let tth=0;
    let tht=0;
    let thh=0;
    let htt=0
    let hth=0;
    let hht=0
    let hhh=0;

    for(let j=0; j<leng-2; j++){
        if(coin[j]==="T" && coin[j+1]==="T" && coin[j+2]==="T"){
            ttt++
        }else if(coin[j]==="T" && coin[j+1]==="T" && coin[j+2]==="H"){
            tth++
        }else if(coin[j]==="T" && coin[j+1]==="H" && coin[j+2]==="T"){
            tht++
        }else if(coin[j]==="T" && coin[j+1]==="H" && coin[j+2]==="H"){
            thh++
        }else if(coin[j]==="H" && coin[j+1]==="T" && coin[j+2]==="T"){
            htt++
        }else if(coin[j]==="H" && coin[j+1]==="T" && coin[j+2]==="H"){
            hth++
        }else if(coin[j]==="H" && coin[j+1]==="H" && coin[j+2]==="T"){
            hht++
        }else if(coin[j]==="H" && coin[j+1]==="H" && coin[j+2]==="H"){
            hhh++
        }
    }
    console.log(ttt,tth,tht,thh,htt,hth, hht,hhh)
}