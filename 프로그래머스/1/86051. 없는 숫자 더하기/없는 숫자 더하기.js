function solution(numbers) {
    let arr = [];
    for(let i = 0; i <= 9; i++){
        if (numbers.includes(i) === false){
            arr.push(i);
        }
    }
    return arr.reduce((a,c)=>a+c,0);
}