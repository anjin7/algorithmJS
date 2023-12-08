let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, A, ...arr] = input;
let nameList = A.split(' ');
let likeList = [];
for(let i=0; i<parseInt(N); i++){
    likeList.push(0);
}
for(let i=0; i<parseInt(N); i++){
    let likeArr = arr[i].split(' ');
    for(let j=0; j<likeArr.length; j++){
        likeList[nameList.indexOf(likeArr[j])]++
    }
}
let newList = [];
for(let i=0; i<parseInt(N); i++){
    let list = [nameList[i], likeList[i]]
    newList.push(list)
};
newList.sort((a,b) => b[1]-a[1] || a[0]-b[0]);
for(let i=0; i<parseInt(N); i++){
    console.log(newList[i].join(' '))
}