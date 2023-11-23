function solution(balls, share) {
    let nFactorial = 1;
    for (let i = balls; i>=1; i--){
        nFactorial*=i;
    }

    let mFactorial = 1;
    for (let j = share; j>=1; j--){
        mFactorial*=j;
    }
    
    let nMinusMFactorial = 1;
    for (let k = balls-share; k>=1; k--){
        nMinusMFactorial*=k;
    }

    if(balls === share) return 1;
    return Math.round(nFactorial/(nMinusMFactorial*mFactorial));
}