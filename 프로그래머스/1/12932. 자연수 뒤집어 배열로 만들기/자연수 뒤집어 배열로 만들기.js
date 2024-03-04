function solution(n) {
    let result = [];
    String(n).split("").map((item) => {
    result.unshift(Number(item));
})
    return result
}