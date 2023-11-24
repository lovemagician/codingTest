function solution(sides) {
    let answer = []
    sides.sort((a,b)=>a-b);
    for (let i=sides[1]-sides[0]+1; i<=sides[1]; i++){
        answer.push(i);
    }
    for (let j=sides[1]+1; j<sides[0]+sides[1]; j++){
        answer.push(j);
    }
    return answer.length;
}