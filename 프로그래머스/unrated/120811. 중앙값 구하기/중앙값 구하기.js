//array에 sort를 사용하여 오름차순으로 정리한다.
//array.length에 -1 후 /2 를하여 결과 값이 중앙값이 되고 해당 인덱스를 리턴한다.

function solution(array) {
    array.sort(function(a,b){
        return a-b;
    })
    return array[(array.length-1)/2] ;
}