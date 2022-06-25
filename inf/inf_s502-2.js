function solution(arr1, arr2){
  let answer=[];
  let set1 = new Set(arr1);
  for(let i=0; i<arr2.length; i++){
    if(set1.has(arr2[i])){
      answer.push(arr2[i]);
    }
  }
  answer.sort((a, b) => a-b);
  return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));