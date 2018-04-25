const txt = `Programação Orientada a Objetos (também conhecida pela sua sigla POO) é um modelo de análise, projeto e programação de software baseado na composição e interação entre diversas unidades chamadas de 'objetos'. A POO é um dos 4 principais paradigmas de programação (as outras são programação imperativa, funcional e lógica). Os objetos são operados com o conceito de 'this' (isso) ou 'self' (si), de forma que seus métodos muitas vezes modifiquem os dados da própria instância. Os programas são arquitetados na forma de objetos que interagem entre si. Dentre as várias abordagens da POO, as baseadas em classes são as mais comuns: objetos são instâncias de classes, o que em geral também define o tipo do objeto. Assim, na POO, implementa-se um conjunto de classes. Cada classe determina o comportamento (definido nos métodos) e estados possíveis (atributos) de seus objetos, assim como o relacionamento com outros objetos. A alternativa mais usual ao uso de classes é o uso de protótipos. Neste caso, objetos são copias de outros objetos, não instâncias de classes. Javascript e Lua são exemplos de linguagens cuja POO é realizada por protótipos. A diferença mais prática mais evidente é que na POO baseada em protótipos apenas a herança simples é implementada pela cópia do objeto.`;

const result = stats(txt);
console.log(result.length > 50);
// cada item em resultado é a estatística de uma palavra
// o subitem 0 é a palavra e o subitem 1 é a contagem
console.log(result[0][0] === 'programação');
console.log(result[0][1] === 4);
console.log(result[1][0] === 'orientada');
console.log(result[1][1] === 1);
console.log(result[2][0] === 'objetos');
console.log(result[2][1] === 9);
console.log(result[3][0] === 'também');
console.log(result[3][1] === 2);
// adicionar mais 12 casos de teste:

const txt1 = `Caros amigos, o entendimento das metas propostas nos obriga à análise de todos os recursos funcionais envolvidos. Por outro lado, o surgimento do comércio virtual acarreta um processo de reformulação e modernização das diretrizes de desenvolvimento para o futuro. O empenho em analisar a estrutura atual da organização causa impacto indireto na reavaliação do impacto na agilidade decisória. Ainda assim, existem dúvidas a respeito de como o início da atividade geral de formação de atitudes exige a precisão e a definição do processo de comunicação como um todo. Acima de tudo, é fundamental ressaltar que o novo modelo estrutural aqui preconizado assume importantes posições no estabelecimento dos conhecimentos estratégicos para atingir a excelência.`;

const r1 = stats(txt1);

console.log(r1[0][0]==='caros');
console.log(r1[0][1] === 1);
console.log(r1[16][0]==='processo');
console.log(r1[16][1] === 2);
console.log(r1[20][0]==='desenvolvimento');
console.log(r1[20][1] === 1);
console.log(r1[34][0]==='assim');
console.log(r1[34][1] === 1);

const txt2 = `Era uma vez... numa terra muito distante...uma princesa linda, independente e cheia de auto-estima. Ela se deparou com uma rã enquanto contemplava a natureza e pensava em como o maravilhoso lago do seu castelo era relaxante e ecológico... Então, a rã pulou para o seu colo e disse: linda princesa, eu já fui um príncipe muito bonito. Uma bruxa má lançou-me um encanto e transformei-me nesta rã asquerosa. Um beijo teu, no entanto, há de me transformar de novo num belo príncipe e poderemos casar e constituir lar feliz no teu lindo castelo. A tua mãe poderia vir morar conosco e tu poderias preparar o meu jantar, lavar as minhas roupas, criar os nossos filhos e seríamos felizes para sempre... Naquela noite, enquanto saboreava pernas de rã sautée, acompanhadas de um cremoso molho acebolado e de um finíssimo vinho branco, a princesa sorria, pensando consigo mesma: - Eu, hein?... nem morta!`;

const r2 = stats(txt2);

console.log(r2[0][0] === 'era');
console.log(r2[0][1] === 2);
console.log(r2[5][0] === 'princesa');
console.log(r2[5][1] === 3);
console.log(r2[12][0] === 'rã');
console.log(r2[12][1] === 4);
console.log(r2[20][0] === 'castelo');
console.log(r2[20][1] === 2);

const txt3 = `Eu odeio quando eu tenho atitudes infantis só pra chamar a atenção... Odeio quando vocês me fazem mudar de ideia com palavras e atitudes... Odeio quando vocês me fazem chorar de alegria... Odeio quando me fazem persistir em sonhos que poderiam ter acabado há muito tempo se não fosse por vocês... Odeio quando não me deixam jogar tudo pro alto... Odeio quando me impedem de fazer bobagens... Odeio quando não se afastam de mim, e odeio quando não me odeiam mesmo que eu seja ridícula, estupida, xinge, faça birra, etc... Mas AMO vocês mais do que tudo...`;

const r3 = stats(txt3);

console.log(r3[0][0] === 'odeio');
console.log(r3[0][1] === 8);
console.log(r3[1][0] === 'quando');
console.log(r3[1][1] === 8);
console.log(r3[17][0] === 'sonhos');
console.log(r3[17][1] === 1);
console.log(r3[25][0] === 'não');
console.log(r3[25][1] === 4);
