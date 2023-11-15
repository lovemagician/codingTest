function solution(my_string) {
    let answer = 0;
    if (my_string.match(/\d+/g)){
    my_string.match(/\d+/g).map((v)=> answer += parseInt(v));
    return answer;
    }
    return 0;
}