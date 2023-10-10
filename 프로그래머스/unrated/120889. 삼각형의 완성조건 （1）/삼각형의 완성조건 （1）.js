function solution(sides) {
    let answer = 0;
    const compare = (a , b) => {
       return a - b;
    };
    sides.sort(compare);
    if (sides[0]+sides[1] > sides[2]){
        answer = 1;
    } else {
        answer = 2;
    };
    return answer;
}