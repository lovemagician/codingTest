function solution(num) {
    let number = num;
    if (num === 1){
        return 0;
    }
    for(let i = 1; number >= 1; i++){
        if (number === 1){
            if(i>500){
                return -1;
            }
            return i-1;
        }
        if (number%2 === 0){
            console.log(i);
            number = number/2;
            continue;
        }
        if (number%2 === 1){
            console.log(i);
            number = (number*3)+1;
            continue;
        } 
    }
}