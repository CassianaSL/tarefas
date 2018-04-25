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
function sinais(str) {
    const v = [',', '.', ';', ':', '(', ')', '[', ']', '-', '/', '*', '+',
        '?', '!', '"', '=', '_', '%', '$', '#', '@', 'ª', 'º', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', '0', `'`];
    const nstr = downcase(str);
    let pf = '';
    const zero = 0;
    let ok = true;
    for (let i = zero; i < nstr.length; i++) {
        for (let cv = zero; cv < v.length; cv++) {
            if (nstr[i] === v[cv]) ok = false;
        }
        if (ok) pf += nstr[i];
        else ok = true;
    }
    return pf;
}
function split(str, sep) {
    const nstr= sinais(str);
    const zero = 0;
    const vet = [];
    let pv = 0;
    vet[pv] = '';
    for (let i = zero; i < nstr.length; i++) {
        if (nstr[i] === sep) {
            pv++;
            vet[pv] = '';
        } else vet[pv] += nstr[i];
    }
    return vet;
}

function stopword(str) {
    const sw = ['o', 'a', 'os', 'as', 'um', 'uma', 'uns', 'umas',
        'ao', 'aos', 'aonde', 'do', 'de', 'dos', 'da', 'das', 'dum',
        'duns', 'duma', 'dumas', 'dele', 'deles', 'dela', 'delas',
        'deste', 'destes', 'desta', 'destas', 'desse', 'desses',
        'dessa', 'dessas', 'daquele', 'daqueles', 'dequela', 'daquelas',
        'disto', 'disso', 'daquilo', 'daqui', 'dai', 'daí', 'dali', 'no',
        'nos', 'na', 'nas', 'num', 'numa', 'nuns', 'numas', 'à', 'às', 'á',
        'ás', 'pelo', 'pelos', 'pela', 'pelas', 'doutro', 'doutros', 'doutras',
        'neste', 'nestes', 'nesta', 'nestas', 'nesse', 'nesses',
        'naquele', 'naqueles', 'naquela', 'naquelas', 'nisto', 'nisso',
        'naquilo', 'àquele', 'àqueles', 'àquela', 'àquelas', 'àquilo', 'eu',
        'tu', 'ele', 'ela', 'nós', 'vós', 'eles', 'elas', 'mim',
        'comigo', 'ti', 'contigo', 'conosco', 'convosco', 'me', 'te',
        'lhe', 'nos', 'vos', 'lhes', 'meu', 'minha', 'meus', 'minhas',
        'teu', 'tua', 'teus', 'tuas', 'seu', 'sua', 'seus', 'suas',
        'nosso', 'nossa', 'nossos', 'nossas', 'vosso', 'vossa', 'vossos',
        'vossas', 'este', 'esta', 'estes', 'estas', 'isto', 'esse', 'essa',
        'esses', 'essas', 'isso', 'aquele', 'aquela', 'aqueles', 'aquelas',
        'aquilo', 'mesmo', 'mesma', 'mesmos', 'mesmas', 'próprio', 'própria',
        'próprios', 'próprias', 'tal', 'tais', 'semelhante', 'semelhantes',
        'que', 'quem', 'qual', 'quais', 'quanto', 'quanta', 'quantos',
        'quantas', 'onde', 'cujo', 'cuja', 'cujos', 'cujas', 'alguém',
        'ninguém', 'outrem', 'tudo', 'nada', 'cada', 'algo', 'algum',
        'algumas', 'nenhuns', 'nenhuma', 'todo', 'todos', 'outra', 'outras',
        'vários', 'várias', 'tanto', 'tantos', 'quanta', 'quantas', 'qualquer',
        'quaisquer', 'bastante', 'bastantes', 'com', 'por', 'para', 'perante',
        'ante', 'até', 'após', 'desde', 'em', 'entre', 'contra', 'sem', 'sob',
        'sobre', 'trás', 'afora', 'exceto', 'salvo', 'malgrado', 'durante',
        'mediante', 'menos', 'acerca', 'apesar', 'através', 'junto', 'além',
        'ou', 'ora', 'portanto', 'nem', 'todavia', 'mas', 'porém',
        'entretando', 'logo', 'pois', 'é', 'e', '', 'ou'];
    const pase= split(str, ' ');
    const nfra= [];
    const zero = 0;
    let cfra= 0;
    let iv= 0;
    let ok= true;
    for (let i = zero; i < pase.length; i++) {
        for (iv = zero; iv < sw.length; iv++) {
            if (pase[i] === sw[iv]) ok = false;
        }
        if (ok) {
            nfra[cfra] = pase[i];
            cfra++;
        } else ok = true;
    }

    return nfra;
}
