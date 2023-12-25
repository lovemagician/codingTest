function solution(A, B) {
    let aArray = [...A];
    for (let i = 0; i < aArray.length; i++){
        if (A === B){
            return 0;
        }
        else {
            aArray.unshift(aArray.pop())
            if(aArray.join("") === B){
                return i+1;
            }
        }
    }
     return -1;
}