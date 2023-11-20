function solution(array) {
    const set = new Set(array)
    const setArray = [...set]; 
    let dupNumber = []
    let countNumber = []
    let maxValue = []
    for (let i = 0; i < setArray.length; i++){  
        dupNumber.push(array.filter(element => setArray[i] === element));
    }
    console.log(dupNumber)
    for (let j = 0; j < dupNumber.length; j++){
        countNumber.push(dupNumber[j].length);
    }
    console.log(countNumber)
    for (let k = 0; k < countNumber.length; k++){
        if (countNumber[k] === Math.max(...countNumber)){
            maxValue.push(countNumber[k]);
        }
    }
    console.log(maxValue)
    let answerIndex = countNumber.indexOf(maxValue[0])
    let answerArray = dupNumber[answerIndex]
    return maxValue.length === 1 ? answerArray[0] : -1 
}