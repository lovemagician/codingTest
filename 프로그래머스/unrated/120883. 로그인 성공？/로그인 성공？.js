function solution(id_pw, db) {
    let id = [];
    let pw = [];
    
    for (let el of db){
        id.push(el[0]);
        pw.push(el[1]);
    }
    let idIndexCheck = id.map((v)=>v===id_pw[0]).indexOf(true);
    if (idIndexCheck >= 0) {
        if (id_pw[1] === db[idIndexCheck][1])
            {
                return "login";
            }
            else {
                return "wrong pw";
            }
    }
    else {
        console.log("ㅇㅇ")
        return "fail";
    };
}