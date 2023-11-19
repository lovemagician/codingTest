function solution(bin1, bin2) {
    let result10 = parseInt(bin1)+parseInt(bin2);
    let result10Array = String(result10).split("").map((n)=>Number(n));
    console.log(result10Array);
    for (let i = result10Array.length-1; i >= 0; i-- ) {
        console.log(result10Array[i]);
        if (result10Array[i] === 2){
            if (i === 0){
                result10Array[i] = 0;
                result10Array.unshift(1)
                console.log("첫0")
            }else { 
            result10Array[i] = 0;
            result10Array[i-1] += 1
            console.log("첫구덩이")
                  }
           
        }
        if (result10Array[i] === 3){
            if (i === 0){
                result10Array[i] = 1;
                result10Array.unshift(0)
                console.log("둘0")
            }
            result10Array[i] = 1;
            result10Array[i-1] += 1
            console.log("둘구덩이")
        }
        console.log("탈출")
    }
    return result10Array.join("");
}