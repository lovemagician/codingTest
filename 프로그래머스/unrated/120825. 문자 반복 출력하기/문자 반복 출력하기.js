function solution(my_string, n) {
    let answer = "";
    const divide = my_string.split("");
    //my_string의 한 글자씩 배열로 바꾸어 divide에 넣어준다.
    for (let i = 0; i < divide.length; i++) {
        my_string = divide[i].repeat(n);
        //한 글자씩 순서대로 n번 입력해 나온 결과를 my_string에 넣어준다.
        //ex)hhh
        //   eee
        //   lll
        //   lll
        //   ooo
        answer += my_string;
        //값들을 answer에 하나씩 더해 담는다.
        //hhh+eee+lll+lll+ooo
        //= hhheeellllllooo
    }
    return answer;
}
    