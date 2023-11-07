function solution(order) {
    let orderArray = order.toString().split("").map((v)=>(Number(v)));
    let result = 0;
    for (let i = 0; i < orderArray.length; i++) {
        if(orderArray[i]%3 === 0){
            if(orderArray[i] !== 0)
            result += 1;
        }
    }
    return result;
}