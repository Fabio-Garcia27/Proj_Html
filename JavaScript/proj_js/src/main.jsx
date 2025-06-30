//const idade = null;

//document.body.innerText = 'Sua idade é: ' + (idade || 'Não informado');
/*
const user = {
  name: 'Fábio',
  idade: '53',
  address: {
    street: 'Rua teste',
    number: 176,
  }
}  
*/

//document.body.innerText = JSON.stringify(Object.values(user))

//document.body.innerText = JSON.stringify(Object.entries(user))

//const address = user.address

//ou desestruturação

//const { address, idade:age, nickname='Garcia' } = user

//document.body.innerText = JSON.stringify({ address, age, nickname })
/*
function mostraIdade(user) {
  return user.idade;
}

document.body.innerText = mostraIdade(user)
*/

// Rest operator
///const {name, ...rest} = user;
//document.body.innerText = JSON.stringify(rest)

//const array = [1,2,3,4,5,6,7,8,9,10]

//const first = array[0];

//const [first, second] = array;

//document.body.innerText = JSON.stringify({first,second})

//Short Syntax
/*
const name = 'Fábio';
const age= 27;

const user = {
  name,
  age,
}

document.body.innerText = JSON.stringify(user)
*/
/*
// Optional Chaining
const user = {
  name: 'Fábio',
  age: '53',
  address: {
    street: 'Rua teste',
    number: 176,
      zip: {
        code: '87502-090',
        city: 'Umuarama'
      },
      showFullAddress() {
        return 'ok'; 
      }
  }
}   

//document.body.innerText = JSON.stringify(user)

//document.body.innerText = user.address?.showFullAddress?.()

const key = 'name';
document.body.innerText = user [key]

*/
/*
const array = [1,2,3,4,5];

const novoArray = [];

array.forEach(item => {
  novoArray.push(item * 2);
})

document.body.innerText = JSON.stringify(novoArray)
*/