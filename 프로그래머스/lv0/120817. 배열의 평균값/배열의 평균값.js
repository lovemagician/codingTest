function solution(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
        //console.log(i);
        //console.log(numbers[i]);
    }
    //console.log(result);
    return result/numbers.length;
}