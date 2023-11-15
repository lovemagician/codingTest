function solution(array, n) {
    array.push(n);
    array.sort((a,b)=>a-b);
    let arrayNum = array[array.indexOf(n)]
    let lessNum = array[array.indexOf(n)-1];
    let biggerNum = array[array.indexOf(n)+1];
    if (arrayNum === array[0]){
        return biggerNum;
        }
    if (arrayNum === array[array.length-1]){
        return lessNum;
        }
    if ((arrayNum - lessNum) > (biggerNum - arrayNum)){
        return biggerNum;
    }   return lessNum;
    //n이 첫 번째 혹은 마지막일 경우
    //n보다 작은 수는 n - 작은 수
    //n보다 큰 수는 큰 수 - n
    //비교 후 작은 값을 리턴
}