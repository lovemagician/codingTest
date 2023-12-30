function solution(quiz) {
    return quiz.map((v)=> {
      const [calc,result] = v.split (" = ");
      const operator = calc.includes('+') ? 1 : -1
      const [a,b] = calc.split(operator === 1 ? ' + ' : ' - ');
      return +a + (+b * operator) === +result ? 'O' : 'X'
    })
    
}