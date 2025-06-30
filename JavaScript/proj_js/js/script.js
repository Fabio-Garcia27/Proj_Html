// tipode variáveis

let idade = 90 // tipo numérico

let nome = "Fábio Garcia" // tipo string

let logado = false // tipo booleano

console.log(idade)
console.log(nome)

// array 
let ingredientes = ["farina", "água", "sal", "corante"] // array

console.log(ingredientes) // lista completa
console.log(ingredientes[3]) // posição pegar na lista
console.log(ingredientes[3],ingredientes[0]) // duas posições pegar na lista

// objeto 

let personagem = {
    nome: "Fábio",
    nivel: 10,
    forca: 800,
    magia: 200,
    vida: 1000,
    mana: 200
}

console.log(personagem) // lista completa
console.log(personagem.magia) // lista 1 item

// funções = input processa output

function somar(a, b) {
    let resultado = a + b   
    return resultado
}

let x = somar(15, 5)
let y = somar(2, 8)

console.log(x)
console.log(y)