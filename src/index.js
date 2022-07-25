const MORSE_TABLE = {
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

function decode(expr) {
    // write your solution here

    const exprString = expr.toString();
    let arrChar = [];

    for ( let i = 0; i < exprString.length; i +=10 ) {
        let x = exprString.slice(i, i + 10);
        arrChar.push(x);
    };

    let arrWithout0 = [];

    for ( let item of arrChar ) {
        if ( item === '**********') {
            arrWithout0.push('**********')
        } else {
            arrWithout0.push(Number(item).toString()); 
        }
    };

    let arrMorseCode = [];

    for ( let elem of arrWithout0 ) {
        if ( elem === '**********') {
            arrMorseCode.push(' ');
        } else {
            let arrMorseChar = '';
            for ( let i = 0; i < elem.length; i = i + 2 ) {
                let x = elem.slice(i, i + 2);
                
                if ( x === '10' ) { arrMorseChar += '.' } 
                else { arrMorseChar += '-' }; 
            }
            arrMorseCode.push(arrMorseChar);
        }
        arrMorseChar = '';
    };

    const morse = Object.keys(MORSE_TABLE);
    const char = Object.values(MORSE_TABLE);

    let arrText = [];

    for ( let i = 0; i < arrMorseCode.length; i++) {
        if ( arrMorseCode[i] === ' ') {
            arrText.push(' ');
        } else {
            let pos = morse.indexOf(arrMorseCode[i]);
            arrText.push(char[pos]);
        }
    };

    return arrText.join('');
}

module.exports = {
    decode
}