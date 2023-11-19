function solution(array) {
    let counter = 0;
    let arraySplit = array.join("").split("");
    for (let i = 0; i < arraySplit.length; i++) {
        if (arraySplit[i] === "7"){
            counter += 1;
        }
    }
    return counter;
}