function solution(n) {
const int = Math.sqrt(n)
return int % 1 === 0 ? (int+1)*(int+1) : -1;
}