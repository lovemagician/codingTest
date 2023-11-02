function solution(age) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j"];
    let ageNum = age.toString().split("");
    console.log(ageNum.length);
    if (ageNum.length === 1){
        return alphabet[ageNum[0]]
    } else if (ageNum.length === 2){
    return alphabet[ageNum[0]] + alphabet[ageNum[1]]
    } else if (ageNum.length === 3){
       return alphabet[ageNum[0]] + alphabet[ageNum[1]] + alphabet[ageNum[2]] 
    } else 
       return alphabet[ageNum[0]] + alphabet[ageNum[1]] + alphabet[ageNum[2]]  + alphabet[ageNum[3]];
};