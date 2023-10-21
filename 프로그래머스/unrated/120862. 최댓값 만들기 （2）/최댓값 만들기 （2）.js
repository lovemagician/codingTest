function solution(numbers) {
    numbers.sort((a,b) => {
        return a - b;
    });
    const posNum = numbers[numbers.length-1]*numbers[numbers.length-2];
    const negNum = numbers[0]*numbers[1];
    if (posNum > negNum){
        return posNum;
    } else {
        return negNum;
    }
}