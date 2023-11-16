function solution(emergency) {
    return emergency.slice().map((num) => emergency.sort((a,b)=>b-a).indexOf(num) + 1);
}