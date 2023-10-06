function solution(n, k) {
    const price = (n * 12000)+(k * 2000);
    const service = Math.floor(n/10) * 2000;
    const realPrice = price - service;
    return realPrice;
}

