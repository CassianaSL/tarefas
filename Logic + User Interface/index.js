function trimLeft(str) {
    let r = '';
    let ok = false;
    for (let i = 0; i < str.length; i++) {
        if ((str[i] !== '\n' && str[i] !== '\r' && str[i] !== '\t')||ok) {
            if (str[i] !== ' ' || ok) {
                r += str[i];
                ok = true;
            }
        }
    }
    return r;
}

// aparar String à esquerda: remover espaços à esquerda da String
console.assert(trimLeft('    abc  ') === 'abc  ');
console.assert(trimLeft('    com espaco  ') === 'com espaco  ');
const tst = '\r \n \t com carriage return, line feed, tab e espaco  \n';
const tresp = 'com carriage return, line feed, tab e espaco  \n';
console.assert(trimLeft(tst) === tresp );

function trimRight(str) {
    let res = '';
    let ok = false;
    const um = 1;
    const zero= 0;
    for (let i = str.length - um; i >= zero; i--) {
        if ((str[i] !== '\n' && str[i] !== '\r' && str[i] !== '\t') || ok) {
            if (str[i] !== ' ' || ok) {
                res = str[i] + res;
                ok = true;
            }
        }
    }
    return res;
}
// aparar String à direita: remover espaços à direita da String
console.assert(trimRight('    abc  ') === '    abc');
console.assert(trimRight('    abc \r \n \t ') === '    abc');

function trim(str) {
    return trimRight(trimLeft(str));
}

// aparar String em ambos lados
console.assert(trim('    abc  ') === 'abc');
console.assert(trim('\n \r\t      abc\n\r \t        ') === 'abc');
console.assert(trim('\n \r\t      com espaco\n\r \t        ') === 'com espaco');
