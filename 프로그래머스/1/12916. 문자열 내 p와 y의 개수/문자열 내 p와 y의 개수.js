function solution(s){
    const pArray = s.toLowerCase().split("").filter((item)=>item==="p");
    const yArray = s.toLowerCase().split("").filter((item)=>item==="y");
    return pArray.length === yArray.length ? true : false;
}