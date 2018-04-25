function downcase(str) {
    let r = '';
    const zero = 0;
    const inle = 65;
    const finle = 90;
    const inca = 192;
    const fimca = 221;
    const soma = 32;
    let n = 0;
    for (let i = zero; i < str.length; i++) {
        n = str.charCodeAt(i);
        if ((n >= inle && n <= finle) || (n >= inca && n <= fimca)) {
            r += String.fromCharCode(n + soma);
        } else r += str[i];
    }
    return r;
}

console.log(downcase('TESTE') === 'teste');
console.log(downcase('Teste') === 'teste');
console.log(downcase('T$% 12TR') === 't$% 12tr');
const tst1= 'CURSO TÉCNICO EM INFORMÁTICA PARA INTERNET';
const r1= 'curso técnico em informática para internet';
console.log(downcase(tst1) === r1);
const tst2= 'Grande Área: CIÊNCIA DA COMPUTAÇÃO';
const r2= 'grande área: ciência da computação';
console.log(downcase(tst2) === r2);

const input = document.querySelector('input');
const button = document.querySelector('#button');
const output = document.querySelector('output');

button.addEventListener('click', function() {
    output.textContent= downcase(input.value);
    input.value='';
});
