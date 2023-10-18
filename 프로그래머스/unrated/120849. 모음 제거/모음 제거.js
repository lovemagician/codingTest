//모음을 어레이로 묶는다.
//for문과 replace를 사용하여 모음을 순서대로 제거한다.  

function solution(my_string) {
    let answer = my_string;
    const vowel = ["a","e","i","o","u"]
    for (let i = 0; i < vowel.length; i++){
        answer = answer.replaceAll(vowel[i],"");
    } return answer;
}