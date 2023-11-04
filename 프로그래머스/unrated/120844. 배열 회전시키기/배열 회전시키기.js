function solution(numbers, direction) {
    let num = []
     
    if (direction == "right") {
        num.push(numbers[numbers.length-1]);
        for (let i = 0; i <= numbers.length-2; i++){
        num.push(numbers[i]);
        }
        return num;
        }
    else {
        for (let i = 1; i <= numbers.length-1; i++){
            num.push(numbers[i]);
        }
        num.push(numbers[0]);
        return num;
    }
}