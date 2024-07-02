import { Queue } from "../interface/Queue";
import readlinesync = require('readline-sync')


const fila = new Queue<string>();

console.log('\n **************************************')
console.log('      1- Adicionar cliente na fila     ')
console.log('      2- Listar todos clientes         ')
console.log('      3- Retirar client da fila        ')
console.log('      0- Sair                          ')
console.log(' **************************************\n')

let codigo: number;
codigo = readlinesync.questionInt('\nDigite uma opcao: ')

let cliente: string;


while(codigo != 0){
        
    switch(codigo){
        case 1:
            cliente = readlinesync.question('\nDigite o nome: ')
            fila.enqueue(cliente)
            console.log('\nFila:\n')
            fila.printQueue()
            console.log('\nCliente Adicionado!')
            break
        case 2:
            console.log('\nListas de clientes na fila:\n')
            fila.printQueue()
            break
        case 3:
            if(!fila.isEmpty()){
                fila.dequeue()
                console.log('\nFila:\n')
                fila.printQueue()
                console.log('\nO cliente foi chamado!')
                break

            } else{
                console.log('\nA fila está vazia!')
                break
            }
        default:
            console.log('\nEsse código não existe')
    }


    console.log('\n **************************************')
    console.log('      1- Adicionar cliente na fila     ')
    console.log('      2- Listar todos clientes         ')
    console.log('      3- Retirar client da fila        ')
    console.log('      0- Sair                          ')
    console.log(' **************************************\n')
    
    
    codigo = readlinesync.questionInt('\nDigite uma opcao: ')

}

console.log('\nPrograma finalizado!')