function solution(num, k) {
    const str = String(num);
    const mapfn = (arg) => Number(arg);
    const newArr = str.split("").map(mapfn);
    if (newArr.includes(k)){
        return newArr.indexOf(k)+1;
} else {
    return newArr.indexOf(k);
}
};