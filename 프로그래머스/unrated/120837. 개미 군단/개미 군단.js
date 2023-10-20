function solution(hp) {
    let answer = 0;
    answer = Math.floor(hp/5);
    answer += (hp%5)/3;
    answer += (hp%5)%3;
    return Math.floor(answer);
}