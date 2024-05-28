function solution(n) {
    const answer = Number(String(n).split('').map((n)=>Number(n)).sort((a,b)=>b-a).join(''));

    return answer;
}