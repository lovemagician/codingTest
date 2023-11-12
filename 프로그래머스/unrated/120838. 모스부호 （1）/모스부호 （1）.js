function solution(letter) {
    let answer = ""
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};  
    const morseKeys = Object.keys(morse);
    const morseAlphabet = Object.values(morse);
    const letterArray = letter.split(" ");
    for (let i = 0; i < letterArray.length; i++){
      answer += morseAlphabet[morseKeys.indexOf(letterArray[i])]
    }
    return answer;
}