function solution(n) {
    let temp = [];
    let primeNum = [];
    for (let i = 2; i <= n; i++){
        n%i === 0 ? temp.push(i) : "";
    }
    console.log(`${temp}템프`)
    for (let num of temp){
        let divideNum = [];
        for (let j = 2; j <= num; j++){
          if (num%j === 0){
              divideNum.push(j)
              console.log(divideNum);
          }
        }
        if (divideNum.length === 1) {
            primeNum.push(num);
            divideNum = [];
        }
    }
    return primeNum;
}