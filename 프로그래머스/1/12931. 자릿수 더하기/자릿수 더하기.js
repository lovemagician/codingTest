function solution(n)
{
   return String(n).split("").length === 1 ?  n :  String(n).split("").reduce((acc,cur)=>Number(acc) + Number(cur));
}