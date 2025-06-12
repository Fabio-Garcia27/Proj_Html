const number = 200;

console.log(number);

function digaMeuNome() {
    const name = 'Fábio';
    const lastname = 'Garcia';
    console.log(name + lastname);
}
digaMeuNome();

function digaQualquerNome(name) {
    console.log(name);
}
digaQualquerNome("Fábio");

function calculo(num1, num2) {
    const soma = num1 + num2;
    console.log(soma);
}
calculo(10, 20);

function soma(num1, num2) {
    const resultado = num1 + num2;
    return resultado;

}
const resultadoSoma = soma(30, 40);
console.log(resultadoSoma);

function estaEndividado(receita, gastos) {
    if (receita > gastos) {
        return "Está no azul";
    } else {
        return "Está no vermeho";
    }
}
const maria = estaEndividado(5000, 7000);
const joao = estaEndividado(10000, 2000);
console.log(maria);
console.log(joao);

const digaMeuNome2 = () => {
    console.log("Fábio");
}
digaMeuNome2();

//boleanas
// false ou true

//objetos
const usuario1 = {
    nome: 'Fábio',
    idade: 53,
    casado: false,
    conjuge: null
}
//console.log(usuario);
console.log(usuario1.idade);

const usuario2 = {
    nome: 'Adriana',
    idade: 56,
    casado: true,
    conjuge: 'Fábio'
}
console.log(usuario2.casado);

//array
const meuArray = [
{
    nome: 'Fábio',
    idade: 53,
    casado: false,
    conjuge: null
},
{
    nome: 'Fábio',
    idade: 53,
    casado: false,
    conjuge: null
}
]
console.log(meuArray);
console.log(meuArray[2]);

const numeros = [10, 20, 30, 40]
console.log(numeros);
console.log(numeros[8]);