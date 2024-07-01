import readlinesync = require('readline-sync')

let numero1: number ;
let numero2: number;
let operador: string;
let res: number;

numero1 = readlinesync.questionFloat('\nDigite o numero 1: ')
numero2 = readlinesync.questionFloat('\nDigite o numero 2: ')
operador = readlinesync.question('Qual operacao deseja realizar? \nsoma(+)\nsubtracao(-)\nmultiplicacao(*)\ndivisao(/)\n')


if(operador == '*'){
    res = numero1 * numero2
    console.log(res)
} else if (operador =='/'){
    res = numero1/numero2
    console.log(res)
} else if(operador =='-'){
    res = numero1 - numero2
    console.log(res)
}else{
    res = numero1 + numero2
    console.log(res)
}

