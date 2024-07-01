import readlinesync = require('readline-sync')

const numeros : Array<number> = new Array<number>(); //criando um objeto com a const -> a estrutura do obj n pode modificar, mas os dados sim

numeros.push(10);
numeros.push(1);
numeros.push(12);
numeros.push(14);

numeros.push(readlinesync.questionFloat('Digite um numero'))

numeros.unshift(2,3,4,5) //Add varios dados de uma vez na frente do array

for (let numero of numeros){ //só funciona com estrutura de dados
    console.log(numero)
}

//CRUD: Create, Read, Update, Delete 
//Conta bancária 

numeros.splice(numeros.indexOf(5), 1) // (indice do qual quer apagar, quantidade a partir do indice, elemento novo )

