function solution(i, j, k) {
    let result = 0;
    const strK = String(k);
    for (let n = i; n <= j; n++){
        if (String(n).split("").filter(elem => strK === elem).length){
        result += String(n).split("").filter(elem => strK === elem).length
        }
    }
    return result;
}