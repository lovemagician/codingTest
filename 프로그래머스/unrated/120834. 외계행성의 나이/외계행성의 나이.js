function solution(age) {
    return age.toString().split("").map((e) => "abcdefghij"[e]).join("");
};