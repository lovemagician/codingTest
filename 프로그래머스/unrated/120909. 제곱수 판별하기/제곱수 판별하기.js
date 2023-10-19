// 1 4,9,16,25,36,49,64,81,100,121,144,169
// +3 +5 +7 +9 +11+13+15+17+19 +21 +23 +25

function solution(n) {
    for (let i = 1; i <= n; i++){
        if (n === i*i) {
            return 1;
        } else if (n < i*i) {
            return 2;
        } else if (n !== i*i) {
            continue;
        } 
    }
}