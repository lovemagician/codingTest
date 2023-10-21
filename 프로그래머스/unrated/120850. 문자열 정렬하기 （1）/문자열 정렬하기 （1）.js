function solution(my_string) {
    var answer = [];
    let number = my_string.replaceAll(/[^0-9]/g,"");
    answer = number.split("").map(Number);
    answer.sort((a,b) => {
        return a - b;
    })
    return answer;
}