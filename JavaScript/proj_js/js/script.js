let dolar = 5.44

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

// Após executar informação no campo é Blur 
usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")

// Funções
function formatCurrency(value) {
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2,
    }
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue);
}

// Trocar vírgula por ponto
function fixValue(value) {
    if (typeof value !== 'string') {
         value = value.toString();
    }    

    let fixedValue = value.replace(/,/g, "."); 
    let floatValue = parseFloat(fixedValue);   //transformar string para number
    // digitado valor indevido se torna = 0
    if (isNaN(floatValue)) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type) {
    if (type == "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value);
        let result = fixedValue * dolar;
        result = result.toFixed(2);
        brlInput.value = formatCurrency(result);
    }
    if (type == "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value);
        let result = fixedValue / dolar;  
        result = result.toFixed(2);      
        usdInput.value = formatCurrency(result);
    }    
}






/*
function avisar() {
    alert("Opa, disparei!")
}

let botao = document.querySelector(".botao")
//mouseover
botao.addEventListener("click", () => {
    avisar()
})
*/

/*
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
console.log(x)

// funções = arrow function
let somar2 = (a, b) => {
    let resultado = a + b   
    return resultado
}

let y = somar2(2, 8)
console.log(y)

// tipode variáveis
let idade = 4 // tipo numérico
let nome = "Fábio Garcia" // tipo string
let logado = false // tipo booleano
let lista = ["farina", "água", "sal", "corante"]

// condicional

if (idade >= 18) {
    console.log("Voce é maior de idade")
} else {
    console.log("Voce é menor de idade") 
}

for (let item of lista) {
    console.log(item)
}

*/