const input = document.querySelector('#foto');
const img = document.querySelector('#img');
const bt = document.querySelector('#enviar');
const label = document.querySelector('label');

input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
        bt.addEventListener('click', function() {
            input.style.display = 'none';
            bt.style.display = 'none';
            label.style.display = 'none';
            img.src = reader.result;
            img.style.display = 'inline';
        });
    });
    reader.readAsDataURL(input.files[0]);
});

const nome= document.querySelector('#nome');
const p = document.querySelector('p');

nome.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        p.textContent = nome.value;
        nome.style.display= 'none';
    }
});

const pl= document.querySelector('#pl');
const sec= document.querySelector('section');

pl.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        const div = document.createElement('div');
        div.class = 'add';
        const h2 = document.createElement('h2');
        h2.textContent = pl.value;
        div.append(h2);
        sec.append(div);
        pl.value = '';
        const musica = document.createElement('input');
        musica.type = 'file';
        musica.accept = 'audio/*';
        musica.className = 'musica';
        div.append(musica);
        sec.append(div);
    }
});

// const div = document.querySelector('div');
sec.addEventListener('click', function(e) {
    let b = e.target
    console.log(b.className);

    if (b === 'musica') {
        teste;
    }
});

const teste = function () {
    const musica = document.querySelector('.musica');
    musica.addEventListener('change', function (e) {
        console.log(e.target.tagName);
        const reader = new FileReader();
        const div = e.target.parentElement;
        const audio = document.createElement('audio');
        audio.controls = true;
        reader.addEventListener('load', function () {
            audio.src = reader.result;
            reader.result = null;
            div.append(audio);
        });
        reader.readAsDataURL(musica.files[0]);
    });
}
