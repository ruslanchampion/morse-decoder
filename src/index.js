function decode(expr) {
  const vocabularyMorse = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
    let decodedText = '';
    for (let i = 0; i < expr.length; i+=10){
         let tenSymbStr = expr.slice(i, i+10);
         if (tenSymbStr === '**********') {
            decodedText += ' ';
            continue;
        }
        let morseChar = '';
         for (let j = 0; j < 10; j+=2){   
           let twoSymb = tenSymbStr.slice(j, j+2);
             if (twoSymb !== '00'){
                morseChar += twoSymb === '10' ? '.' : '-';
            }
          }
          decodedText += vocabularyMorse[morseChar];
    }
    return decodedText;
}
module.exports = {
    decode
}
