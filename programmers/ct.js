// 기억나는 대로 작성

let lotteries = [[100, 100, 100], [50, 50, 50]];
function Solution(lotteries) {
  let answer = 0;
  let perArr = [];
  let moneyArr = [];
  for (let i = 0; i < lotteries.length; i++){
    let [winner, person, amount] = lotteries[i].map(x=>parseInt(x));
    let win = (winner * 100) / (person + 1)
    perArr.push(win);
    moneyArr.push(amount)
  } 

  for (let i = 0; i < perArr.length; i++){
    if (perArr[i] > 100) {
      perArr[i] = 100
    }
  }

  let perMax = Math.max(...perArr);
  let perIdx = perArr.indexOf(perMax);
  let idx = perArr.indexOf(perMax);
  let idxArr = [];
  while (idx != -1) {
    idxArr.push(idx);
    idx = perArr.indexOf(perMax, idx+1)
  }

  let maxMoneyArr = [];
  for (let i = 0; i < idxArr.length; i++){
    maxMoneyArr.push(moneyArr[idxArr[i]])
  }
  let moneyMax = Math.max(...maxMoneyArr);
  let moneyIdx = moneyArr.indexOf(moneyMax);

  if (perIdx === perArr.lastIndexOf(perMax)) {
    answer = perIdx+1
  } else {
    answer = moneyIdx+1
  }
  return answer
}

console.log(Solution(lotteries))