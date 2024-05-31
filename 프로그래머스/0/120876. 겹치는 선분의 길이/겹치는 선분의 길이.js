function solution(lines) {
    let arr = [];
    const count = new Map();
    const set = new Set();
    
    lines.forEach(([x,y])=>{
        for(let i = x; i < y; i++) {
            arr.push(i.toString() + (i+1).toString());
        }
    });
    arr.forEach((v)=> count.set(v, (count.get(v)||0)+1 ));
    arr.filter((v)=> count.get(v) !== 1).forEach((v)=>set.add(v));
    console.log(arr);
    console.log(count.size);
    return set.size
}