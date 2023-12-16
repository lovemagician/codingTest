function solution(a, b) {
    //정수일시 리턴 1
     if ((a/b) % 1 === 0) {
        return 1;
     }
    //분모와 분자의 최대공약수 구하기
    const getGcd = (num1, num2) => {
      if (num1 % num2 === 0) return num2;
      return getGcd(num2, num1 % num2);
    };
    let gcd = b/getGcd(a,b);
    //최대공약수를 소인수 분해
    const smallNumber = [];
    let idx = 2;
    while(gcd !== 1) {
        if(gcd%idx === 0) {
            smallNumber.push(idx)
            gcd /= idx
            idx = 2
        } else {
            idx += 1
        };
    }
    let primeArray = Array.from(new Set(smallNumber));
    if (primeArray.length == 1) {
        if (primeArray == 2 || primeArray == 5) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (primeArray.length = 2) {
        if (primeArray[0] == 2 && primeArray[1] == 5) {
            return 1;
        }
        else {
            return 2;
        }
    }
    return 2;
}
    