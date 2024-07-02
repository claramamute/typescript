import readlinesync = require('readline-sync')

let numero1: number ; //escopo programa
let numero2: number;


numero1 = readlinesync.questionFloat('\nDigite o numero 1: ')
numero2 = readlinesync.questionFloat('\nDigite o numero 2: ')

console.log(`\nSoma = ${somar(numero1,numero2)}`)
console.log(`\Subtração = ${subtrair(numero1,numero2)}`)
console.log(`\nMultiplicação = ${multiplicar(numero1,numero2)}`)

let resultadoDivisao = dividir(numero1, numero2);

if(resultadoDivisao){
    console.log(`\n Divisão = ${dividir(numero1,numero2)}`)

}else{
    console.log('\n Não existe divisão por zero!')
}

autor()
//escopo função
function somar(numero1: number, numero2: number): number{
    return numero1 + numero2
}

function multiplicar(numero1: number, numero2: number): number{
    return numero1 * numero2
}

function dividir(numero1: number, numero2: number): number | null{ //vai retornar um numero ou null
    let divisao: number = numero1 / numero2
    return (divisao !==  Infinity ? divisao :null)
}
function subtrair(numero1: number, numero2: number): number{
    return numero1 - numero2
}


function autor(): void{
    console.log('\nFeito por Clara Araujo\n')
}