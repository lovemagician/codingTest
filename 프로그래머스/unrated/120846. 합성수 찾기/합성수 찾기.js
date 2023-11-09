function solution(n) {
    let result = [];
    let answer = [];
    for (let i = 1; i<=n; i++){
        for (let e = 1; e<=i; e++){
            if (i%e === 0) {
            result.push(e);
            }
        }
        if(result.length < 3){
        result = [];
        }
        if(result.length >= 3){
            answer.push(i);
            result = [];
        }
    }return answer.length;
}