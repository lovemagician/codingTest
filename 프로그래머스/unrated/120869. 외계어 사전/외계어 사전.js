function solution(spell, dic) {
    let spellFilter = []
    for (let i = 0; i < dic.length; i++){
        spellFilter.push(spell.map((s)=>dic[i].includes(s)))
        }
    console.log(spellFilter);
    for (let j = 0; j <spellFilter.length; j++){
        if (spellFilter[j].includes(false)){
            console.log("이프");
        }
        else {
            return 1;
        }
    }
    return 2;
}