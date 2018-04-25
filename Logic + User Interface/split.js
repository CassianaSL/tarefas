function split(str, sep) {
    const zero = 0;
    const vet = [];
    let pv = 0;
    vet[pv] = '';
    for (let i = zero; i < str.length; i++) {
        if (str[i] === sep) {
            pv++;
            vet[pv] = '';
        } else vet[pv] += str[i];
    }
    return vet;
}

const zero= 0;
const um= 1;
const dois= 2;
const tres= 3;
const quatro= 4;

const parts = split('the:matrix:revisited', ':');
console.log(parts.length === tres);
console.log(parts[zero] === 'the');
console.log(parts[um] === 'matrix');
console.log(parts[dois] === 'revisited');
console.log(parts[tres] === undefined);

console.log(split('banana', 'a')[zero] === 'b');
console.log(split('banana', 'a')[um] === 'n');
console.log(split('banana', 'a')[dois] === 'n');
console.log(split('banana', 'a')[tres] === '');

const dbo = split('desenvolvimento baseado em objetos', ' ');
console.log(dbo.length === quatro);
console.log(dbo[zero] === 'desenvolvimento');
console.log(dbo[um] === 'baseado');
console.log(dbo[dois] === 'em');
console.log(dbo[tres] === 'objetos');

const str= document.getElementById('str');
const sep = document.getElementById('sep');
const button= document.querySelector('button');
const ul= document.querySelector('ul');

button.addEventListener('click', function(evento) {
    evento.preventDefault();
    const res= split(str.value, sep.value);
    const zero= 0;
    let li;
    for (let i=zero; i<res.length; i++) {
        li= document.createElement('li');
        li.textContent=res[i];
        ul.append(li);
    }
    str.value='';
    sep.value='';
})
