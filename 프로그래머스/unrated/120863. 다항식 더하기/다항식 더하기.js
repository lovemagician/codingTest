function solution(polynomial) {
    let onlyNum = polynomial.split(" + ");
    let xNum = onlyNum.filter((n)=>n.includes("x")).map((v)=>(v.split("x")[0] ? v.split("x")[0] : 1));
    let constNum = onlyNum.filter((n)=>!n.includes("x"));
    if (xNum.length && constNum.length) {
         xNum = xNum.reduce((a,b) => +a + +b);
    constNum = constNum.reduce((a,b) => +a + +b);
    return xNum == 1 ? `x + ${constNum}` : `${xNum}x + ${constNum}`;    
    } else {
        if (constNum.length) {
            constNum = constNum.reduce((a,b)=> +a + +b);
            return constNum + "";
        }
        if (xNum.length) {
            xNum = xNum.reduce((a,b) => +a + +b);
            return xNum == 1 ? "x" : `${xNum}x`;
        }
    }
    
}