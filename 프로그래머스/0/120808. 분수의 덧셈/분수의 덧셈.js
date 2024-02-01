function solution(numer1, denom1, numer2, denom2) {
    let denomworld = (denom1 * denom2);
    let numerworld = (denom1 * numer2)+(numer1 * denom2);
    let gcd = 1
    
        for (let i = 1; i <= numerworld; i++) {
        if(denomworld%i === 0 && numerworld%i === 0) {
            gcd = i
        }
            
    }

    
    
    let answer = [numerworld/gcd, denomworld/gcd]
    
    return answer;
}