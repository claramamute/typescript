import { Stack } from "../interface/Stack";
import readlinesync = require('readline-sync')
const pilha = new Stack<string>();

console.log('\n **************************************')
console.log('      1- Adicionar livro na pilha        ')
console.log('      2- Listar todos livros             ')
console.log('      3- Retirar livro da pilha          ')
console.log('      0- Sair                            ')
console.log(' **************************************\n')

let codigo: number;
codigo = readlinesync.questionInt('\nEntre com a opcao desejada: ')

let livro: string;


while(codigo != 0){
        
    switch(codigo){
        case 1:
            livro = readlinesync.question('\nDigite o nome: ')
            pilha.push(livro)
            console.log('\nPilha:\n')
            pilha.printStack()
            console.log('\nLivro Adicionado!')
            break
        case 2:
            console.log('\nListas de livros na pilha:\n')
            pilha.printStack()
            break
        case 3:
            if(!pilha.isEmpty()){
                pilha.pop()
                console.log('\nPilha:\n')
                pilha.printStack()
                console.log('\nO livro foi retirado da pilha!')
                break

            } else{
                console.log('\nA pilha está vazia!')
                break
            }
        default:
            console.log('\nEsse código não existe')
    }


    console.log('\n **************************************')
    console.log('      1- Adicionar livro na pilha        ')
    console.log('      2- Listar todos livros             ')
    console.log('      3- Retirar livro da pilha          ')
    console.log('      0- Sair                            ')
    console.log(' **************************************\n')
    
    
    codigo = readlinesync.questionInt('\nEntre com a opcao desejada: ')

}

console.log('Programa finalizado!')