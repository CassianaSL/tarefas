const input = document.querySelector('#foto');
const img = document.querySelector('#img');
const label = document.querySelector('label');

input.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
        input.style.display = 'none';
        label.style.display = 'none';
        img.src = reader.result;
        img.style.display = 'inline';
    });
    reader.readAsDataURL(input.files[0]);
});

const nome = document.querySelector('#nome');
const p = document.querySelector('p');

nome.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        p.textContent = nome.value;
        nome.style.display = 'none';
    }
});

const pl = document.querySelector('#pl');
const sec = document.querySelector('section');

pl.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') {
        const div = document.createElement('div');
        div.id = pl.value;
        const h2 = document.createElement('h2');
        h2.textContent = pl.value;
        div.append(h2);
        pl.value = '';
        const musica = document.createElement('input');
        musica.type = 'file';
        musica.accept = 'audio/*';
        musica.className = 'musica';
        musica.addEventListener('change', addAudio);
        div.append(musica);
        sec.append(div);
    }
});

function addAudio(e) {
    const div = e.target.parentElement;
    const audio = document.createElement('audio');
    audio.controls = true;
    const reader = new FileReader();
    reader.addEventListener('load', function() {
        audio.src = reader.result;
        div.append(audio);
    });
    reader.readAsDataURL(e.target.files[0]);
    div.append(document.createElement('br'));
    const span = document.createElement('p');
    const input = document.createElement('input');
    input.placeholder = 'Nome da música';
    input.className = 'innome';
    input.addEventListener('keypress', nomeMus);
    span.append(input);
    div.append(span);
    div.append(document.createElement('br'));
}

function nomeMus(e) {
    if (e.code === 'Enter') {
        const input = e.target;
        const p = input.parentElement;
        p.innerText = input.value;
        input.style.display = 'none';
    }
}
