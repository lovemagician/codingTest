function solution(common) {
    const firstDiff = common[1]-common[0];
    const secondDiff = common[2]-common[1];
    const firstDivide = common[1]/common[0];
    if (firstDiff == secondDiff){
        return common[common.length-1]+(firstDiff);
    }else {
        return common[common.length-1]*firstDivide;
    }
    
}