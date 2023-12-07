function solution(dots) {
    let horizonValue = 0;
    let verticalValue = 0;
    let horizonValueArray = [];
    let verticalValueArray = [];
    
    for (let i = 0; i < dots.length; i++){
        horizonValueArray.push([dots[i][0]]);
    };
        horizonValueArray.sort((a,b)=>a-b);
     for (let j = 0; j < dots.length; j++){
        verticalValueArray.push([dots[j][1]]);
    };
        verticalValueArray.sort((a,b)=>a-b);
    
    if (horizonValueArray[0][0] < 0){
        if (horizonValueArray[2][0] < 0){
            horizonValue = (-horizonValueArray[0][0]) - (-horizonValueArray[2][0])
        }
        else {
            horizonValue = (-horizonValueArray[0][0]) + horizonValueArray[2][0]
             }
    }
    else {
        horizonValue = horizonValueArray[2][0] - horizonValueArray[0][0]
    };
    
    if (verticalValueArray[0][0] < 0){
        if (verticalValueArray[2][0] < 0){
            verticalValue = (-verticalValueArray[0][0]) - (-verticalValueArray[2][0])
            
        }
        else {
            verticalValue = (-verticalValueArray[0][0]) + verticalValueArray[2][0]
             }
    }
    else {
        verticalValue = verticalValueArray[2][0] - verticalValueArray[0][0]
    };
    
    console.log(horizonValue);
    console.log(verticalValue);
    return horizonValue*verticalValue === 0 ? horizonValue+verticalValue : horizonValue*verticalValue;
}