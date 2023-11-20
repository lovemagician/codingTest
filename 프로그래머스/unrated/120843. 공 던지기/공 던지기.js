function solution(numbers, k) {
    let plus = 0
    let numbersArray = [];
    for (let i = 0; i < k; i++){
        if (numbers[plus] === numbers[numbers.length-2]){
            numbersArray.push(numbers[plus])
            plus = 0
        }
        else if (numbers[plus] === numbers[numbers.length-1]){
            numbersArray.push(numbers[plus])
            plus = 1
        }
        else {
            numbersArray.push(numbers[plus]);
            plus += 2;
        }
}
        return numbersArray[numbersArray.length-1]
}