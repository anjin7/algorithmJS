let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<(input.length/2); i++){
    let A = input[i*2].split('');
    let B = input[i*2+1].split('');
    if(A[0]==="E" && B[0]==="E")break;
    let p1 = 0;
    let p2 = 0;
    for(let j=0; j<A.length; j++){
        if(A[j]==="R"){
            if(B[j]==="S"){
                p1++
            }else if(B[j]==="P"){
                p2++
            }
        }else if(A[j]==="S"){
            if(B[j]==="P"){
                p1++
            }else if(B[j]==="R"){
                p2++
            }
        }else if(A[j]==="P"){
            if(B[j]==="R"){
                p1++
            }else if(B[j]==="S"){
                p2++
            }
        }
    }
    console.log(`P1: ${p1}`);
    console.log(`P2: ${p2}`);
}