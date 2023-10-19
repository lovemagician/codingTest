//replaceAll을 사용하여 모든 문자들을(정규식) 제거한다.
//split을 사용하여 숫자들을 배열로 나눈다.
//배열들을 합한다.

function solution(my_string) {
    let answer = 0;
    my_string = my_string.replaceAll(/[\D]/gi,"")
    my_string = my_string.split("")
    for (let i = 0; i < my_string.length; i++) {
        answer += Number(my_string[i]);
    }return answer;
}