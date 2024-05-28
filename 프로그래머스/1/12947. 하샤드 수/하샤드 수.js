function solution(x) {
    let sumOfDigit = (x + "").split("").map((n)=>Number(n)).reduce((a,b)=>a+b);
    if (x % sumOfDigit === 0 ){
        return true;
    }
    return false;
}