function solution(num_list) {
    let answer = [];
    for (let i = num_list.length-1; i >= 0; i--) {
        answer += num_list[i] + ",";
         }
    answer = answer.split(',').map(Number);
    answer.pop();
    console.log(answer)
    return answer;
}