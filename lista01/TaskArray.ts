import readlinesync = require('readline-sync')

const cores : Array<string> = new Array<string>(); //criando um objeto com a const -> a estrutura do obj n pode modificar, mas os dados sim


while(cores.length < 5){
    cores.push(readlinesync.question('\nDigite a cor: '))
}

console.log(`\nCores adicionadas: ${cores}`)
console.log(`\nCores adicionadas: ${cores.sort()}`)