function solution(chicken) {
    let chick = chicken;
    let coupon = 0;
    console.log(chick)
    while ( chick > 9 ) {
        coupon += Math.floor(chick / 10);
        chick = Math.floor((chick  / 10) + (chick % 10));
    }
    return coupon;
}