function solution(my_string) {
    const str = my_string.split("");
    return [...new Set(str)].join("")
}