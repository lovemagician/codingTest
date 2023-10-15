function solution(n) {
    let answer = 0;
    let number = String(n);
    number.split("");
    for( let i = 0; i < number.length; i++ ) {
        answer += Number(number[i]);
    }return answer;
}