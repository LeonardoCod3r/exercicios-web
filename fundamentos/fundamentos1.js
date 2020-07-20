console.log(Number("232.32545464").toFixed(0)); // formata um número decimal
console.log("String".concat(" é").concat(" texto.")); // concatenação de strings (texto)

const nome = 'Rodrigo'.charAt(0, 1) // pegar 2 primeiras letras (letra 0 é a primeira), no caso charAt(origem, últimaLeta)
const string = `Olá ${nome}!` // template string, concatenação na própria string
console.log(string) // imprimindo resultado
console.log(`1 + 1 = ${1+1}`); // calculando operação matemática
const up = s => s.toUpperCase() // function arrow
console.log(up(string)) // resultado da função

let is = false // boolean
console.log(is)
is.valueOf(true) ? is = false : is = true // LP
console.log(is)

if (is == true) {
    is = false
} else {
    is = true
}
console.log(is)
let name = ''
console.log(name || "Nome não encontrado")

const valores = ["Rodrigo", "Ana", "Micaela", "Leonardo"]
console.log(`1- ${valores[2]} e ${valores[3]}`)
let pos = 0
while (valores[pos] != undefined) {
    console.log(valores[pos])
    pos += 1
}
valores.push("Outros")
pos = 0
while (valores[pos] != undefined) {
    console.log(valores[pos])
    pos += 1
}
valores.pop()
delete valores[0]
delete valores[1]
console.log(valores)

const ob = {}
ob.produto = "Iphone 13 Plus"
ob.preço = 21999.99
ob["Desconto legal"] = 15 // evitar espaçamentos

console.log(ob)

const comDesconto = (numero, desconto) => numero * desconto / 100

const ob2 = {
    produto: "Iphone 13",
    preço: 17999.99,
    vendedor: {
        nome: "Carlos",
        cep: "2324432-42",
        telefone: "13 997438204"
    },
    "Desconto legal": 25
}

'{"produto": "Iphone 1", "preço": 100.00, "Desconto legal": 0}' // JSON não é objeto, é formato textual de objeto
console.log(`Você quer comprar ${ob2.produto} por apenas R$ ${ob2.preço}? Acesse nossa loja www.lojalegal.com.br`)
console.log(ob2);
// delete ob2.produto

// ocorrência de transferência de enderenço em variáveis em relação a objetos

let valor // não inicializada
console.log(valor);
// console.log(valor2) variável não declarada
valor = null // ausência de valor
console.log(valor);

// quase tudo é função
console.log(typeof Object);

class produto {}
console.log(typeof produto);

//função - sem/com retorno - ação - trecho de código nomeado que pode ser reutilizado - agrupa várias setenças de código
//pode receber parâmetros

//função sem retorno
function imprimirSoma(numero1, numero2) {
    console.log(numero1 + numero2);
}
imprimirSoma(2, 4);
imprimirSoma(2, 4, 5, 6, 8, 7);

//fuction com retorno
function soma(numero1 = 1, numero2 = 0) {
    return numero1 + numero2;
}

console.log(soma(10, 2));
console.log(soma());
console.log(soma(3));

//Armazenando uma função em uma variavel 

const imprimirSoma2 = function(a, b) {
    console.log(a + b);
}
imprimirSoma2(32, 3);

// função arrow

const soma2 = (a, b) => {
    return a + b;
}
console.log(soma2(33, 2));

// retorno implícito;
const subtracao = (a, b) => a - b; //dois parâmetros ou mais com (), apenas um, pode ser sem
console.log(subtracao(75, 40));

const imprimir2 = a => console.log(a);
imprimir2("Sou lindo e gostoso");


// variaveis var podem ser acessadas em outros blocos
{
    {
        var sera = "Testando 123...";
        console.log(sera);
    }
}
console.log(sera);

function teste() {
    var sera2 = "Testando 321...";
    console.log(sera2);
}

teste();
//em functions, variáveis declaradas dentro dela, não são acessíveis
//console.log(sera2);

//variavel fora de uma função é salva globalmente

//fuja do scopo global (variável global)

var numero = 1;

{
    numero = 2;
    console.log(`dentro = ${numero}`);
}
console.log(`fora = ${numero}`);

var numero0 = 1; {
    let numero0 = 2;
    console.log(`dentro = ${numero0}`);
}
console.log(`fora = ${numero0}`);

//escopo de bloco no let

//usando var em looping

for (var i = 0; i < 11; i++) {
    console.log(i);
}

console.log(`i = ${i}`);

for (let is = 0; is < 11; is++) {
    console.log(is);
}

console.log(`i = ${is}`);

const funcs = []

for (var iss = 0; iss < 10; iss++) {
    funcs.push(function() {
        console.log(iss);
    });
}
//var não tem escopo de função
funcs[2]()
funcs[8]()

// com let
const funcss = []

for (let isss = 0; isss < 10; isss++) {
    funcss.push(function() {
        console.log(isss);
    });
}
funcss[2]();
funcss[8]();
//let possui memória do valor criado

//hoisting
//jogar a declaração das variaveis para cima

testeHoisting = "Olá, isso não faz sentido.";
console.log(testeHoisting);
var testeHoisting = "Olá, isso não faz sentido.";
console.log(testeHoisting);

// o mesmo acontece se a var for definida dentro da função

console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {};
console.log(typeof Cliente)
console.log(typeof new Cliente);

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

//contextos léxicos

const saudacao = "Olá, tudo bem?"

function executar() {
    const saudacao = "Olá, tudo bem e você?" // contexto léxico
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Leonardo',
    idade: 14,
    peso: 54.0,
    endereco: {
        rua: 'Rua 13',
        numero: 5,
        bairro: 'bairro',
        cidade: 'estados unidos',
        estado: 'corinthians kk',
        pais: 'Brasil'
    }
}

console.log(saudacao)
console.log(executar())
console.log(cliente)

//notacao ponto

const obj1 = {}
obj1.nome = 'Bola'
obj1['adjetivo'] = 'Furada'
console.log(obj1.nome);
console.log(obj1.adjetivo);

// criação de objetos com notação ponto e função
function Obj(nome) {
    this.nome = nome
    return this;
}
console.log(Obj("Vaca").nome);

function Obj2(nome) {
    this.nome = nome
}

console.log(new Obj2("Zebra").nome);
//OPERADORES - OPERADORES - OPERADORES

//atribuição

var valor1 = 4;
let valor2 = 3;
valor1 += valor2;
console.log(valor1);

let valor3 = 2;
valor1 -= valor3;
console.log(valor1);

let valor4 = 3;
valor1 *= valor4;
console.log(valor1);

let valor5 = 2;
valor1 /= valor5;
console.log(valor1);

//destructuring 

const pessoa = {
    nomep: 'Leonardo',
    idade: 14,
    peso: 54.0,
    endereco: {
        rua: 'Rua 13',
        numero: 5,
        bairro: 'bairro',
        cidade: 'estados unidos',
        estado: 'corinthians kk',
        pais: 'Brasil'
    }
}

const { nomep, idade } = pessoa // tire dentro do objeto pessoa o nome e a idade
console.log(nomep + " " + idade)

const { nomep: n, idade: id } = pessoa //crie variável com o atributo do objeto

console.log(id + " " + n)

const { sobrenome = "nenhum", bonito = true, legal } = pessoa
console.log(sobrenome + " " + bonito + " " + legal)

const { endereco: { rua, bairro } } = pessoa
console.log(rua)

const [array] = [10]
console.log(array)

const [n1, , n3, n4, n5, n6, n7 = 7] = [1, , 3, 4, , 6]
console.log(n1, n3, n4, n5, n6, n7)

const [, [, nota]] = [
    [8, 7, 9],
    [10, 9, 9]
]
console.log(nota)

function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 }))
console.log(rand({ min: 50 }))
console.log(rand({}));
// error console.log(rand())

function rand2([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([, 10]))
console.log(rand2([]))

//aritméticos

const [w, x, y, z] = [1, 2, 3, 4]
const somar = w + x + y + z
const subtrair = z - w
const modulo = y % 2

console.log(somar, subtrair, modulo)

//relacionais

console.log("1)", '1' == '1')
console.log("2)", '1' === 1)
console.log("3)", '3' != 3)
console.log("4)", '3' !== 3)
console.log("5)", 3 > 2)
console.log("6)", 3 < 2)
console.log("7)", 3 >= 2)
console.log("8)", 3 <= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log("9)", d1 === d2)
console.log("10)", d1 == d2)
console.log("11)", d1.getTime === d2.getTime)
console.log("12)", undefined == null)
console.log("13)", undefined === null)

//logicos

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise "ou exclusivo"
    const comprarTv32 = trabalho1 != trabalho2;
    const materSaudavel = !comprarSorvete; //operador unário
    return { comprarSorvete, comprarTv50, comprarTv32, materSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, false));

//unários

let num1 = 1;
let num2 = 2;
num1++;
console.log(num1);
--num1;
console.log(num1);
console.log(++num1 === num2--)
console.log(++num1 === --num2)

//ternário

const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"
console.log(resultado(6));
console.log(resultado(7))

// +=Contexto de execução=+
let contexto1 = 1;
console.log(contexto1);
this.b = 1.5
this.texto = `Samba`
console.log(this.b);
global.b = 2;
console.log(global.b);
console.log(module.exports.b)
console.log(module.exports == this)
console.log(module.exports)

//variável maluca
abc = 123 // não pode
console.log(global.abc)

//ENTENDER RUNTIMES E EVITAR ESCOPO GLOBAL

// Tratamento de erros

function tratarErroELancar(erro) {
    //throw new Error('Parâmetro do objeto não encontrado')
    //throw 1
    //throw false
    //throw 'Parâmetro do objeto não encontrado'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log("Carregado!");
    }
}

const object = { name: `Roberto` }
imprimirNomeGritado(object)