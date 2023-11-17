function solution(s) {
    let answer = [];
    let array = s.split("");
const getElCount = (arr) => {
    let result = {}
    for(const el of arr) {
        result[el] = (result[el] || 0) + 1;
    }
    return result;
}
const test = getElCount(array);
let testValues = Object.values(test);
let testKeys = Object.keys(test);
for (let i = 0; i < testValues.length; i++){
    
    if (testValues[i] === 1){
        answer.push(testKeys[i])
    }
}return answer ? answer.sort().join("") : "";
    }
    
