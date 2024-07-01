import readlinesync = require('readline-sync')

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

const numero =readlinesync.questionInt('Digite o numero que voce deseja encontrar: ')


const res = (numeros.has(numero)) ? `\nO número ${numero} foi encontrado!` : `\nO número ${numero} não foi encontrado!`
    
console.log(res)

