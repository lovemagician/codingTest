function solution(keyinput, board) {
    let result = [0,0];
    
    const horizonMin = (-board[0]+1)/2;
    const horizonMax = (board[0]-1)/2;
    const verticalMin = (-board[1]+1)/2;
    const verticalMax = (board[1]-1)/2;
    console.log(verticalMin);
    const pushKey = (e) => {
        if (e === "up") {
            if (result[1] === verticalMax){
                result[1] = verticalMax
            }
            else {
            result[1] += 1
            }
        };
        if (e === "down") {
            if (result[1] === verticalMin){
            result[1] = verticalMin
            }
            else {
            result[1] -= 1
            }
        };
        if (e === "left") {
            if (result[0] === horizonMin){
            result[0] = horizonMin
            }
            else {
            result[0] -= 1
            }
        };
        if (e === "right") {
            if (result[0] === horizonMax){
            result[0] = horizonMax
            }
            else {
            result[0] += 1
            }
        };
    };
    
    keyinput.map((n)=>pushKey(n));
    console.log(result);
    if (result[0] > horizonMax) {
        result[0] = horizonMax
    };
    if (result[0] < horizonMin) {
        result[0] = horizonMin
    };
    if (result[1] > verticalMax) {
        result[1] = verticalMax
    };
    if (result[1] < verticalMin) {
        result[1] = verticalMin
    };
    return result;
};