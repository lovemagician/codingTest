function solution(my_string) {
    let answer = [];
    for (let i = 0; i < my_string.length; i++){
        if (my_string[i] === my_string[i].toLowerCase()){
            answer.push(my_string[i].toUpperCase());
        } else {
            answer.push(my_string[i].toLowerCase());
        }
    }return answer.join("");
}