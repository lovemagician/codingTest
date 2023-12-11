function solution(score) {
    let scoreAverage = [];
    for (el of score) {
       scoreAverage.push((el[0]+el[1])/2)
    }
    //점수들의 평균을 구한다.
    const copyScoreAverage = scoreAverage.slice()
    //평균 값을 복사하여 저장해둔다.
    let scoreAsc = copyScoreAverage.sort((a,b)=>b-a);
    //평균 값들을 오름차순 정렬한다.
    let scoreRank = [];
    for (el of scoreAverage) {
        scoreRank.push(scoreAsc.indexOf(el));
    }
    //평균 값들의 오름차순에서 indexOf를 사용하여 평균 값들의 인덱스(순위)를 구한다.
    //0순위가 아닌 1순위부터 시작하기에 모든 인덱스 결과값에 1을 더해준다.
    return scoreRank.map((v)=>v+1);
}