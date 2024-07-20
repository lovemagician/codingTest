function solution(a, b) {
    let array = [];
    if(a < b) {
        for(let i = a; i <= b; i++){
            array.push(i); 
        }
    console.log(array)
    let answer = array.reduce((a,c) => a+c)
    return answer   
}
    if(a > b) {
        for(let i = b; i <= a; i++){
            array.push(i);
        }
    console.log(array)
    let answer = array.reduce((a,c) => a+c)
    return answer  
    }
    return a;
    
}