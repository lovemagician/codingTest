function solution(arr) {
    let array = arr.concat(); 
    let min = array.sort((a,b)=>a-b).shift();
    console.log(min)
    return array.length === 0 ? [-1] : arr.filter(e => e != min);
}