function solution(my_str, n) {
    let answer = []
    for (let i = 0; i<Math.ceil(my_str.length/n); i++){
        if (i === 0){
            answer.push(my_str.slice(0,n))
        }else{
        answer.push(my_str.slice(i*n,(i+1)*n))
            }
    }
    return answer
}