function stats(str) {
    const nvet = stopword(str);
    const vp = [];
    const zero = 0;
    let cvp = 0;
    let ocpa = 0;
    let tst= 0;
    for (let i = zero; i < nvet.length; i++) {
        for (let i2 = zero; i2 < nvet.length; i2++) {
            if (nvet[i] === nvet[i2]) ocpa++;
        }
        for (let i3 = zero; i3<vp.length; i3++) {
            if (nvet[i]===vp[i3][zero]) {
                tst++;
            }
        }
        if (tst===zero) {
            vp[cvp] = [nvet[i], ocpa];
            cvp++;
        } else tst= zero;
        ocpa = zero;
    }
    return vp;
}

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const tb = document.getElementById('tbody');
const p = document.querySelector('p');

button.addEventListener('click', function(ev) {
    ev.preventDefault();
    const txt = document.createElement('p');
    txt.textContent = 'Seu texto: ' + textarea.value;
    p.append(txt);
    const re = stats(textarea.value);
    const zero = 0;
    const um = 1;
    let tr;
    let td1;
    let td2;
    for (let i = zero; i < re.length; i++) {
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td1.textContent = re[i][zero];
        td2.textContent = re[i][um];
        tr.append(td1);
        tr.append(td2);
        tb.append(tr);
    }
    textarea.value = '';
});
