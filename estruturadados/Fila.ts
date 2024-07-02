import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++){
    fila.enqueue(i); // Adicionar elementos no FINAL da fila
}

console.log("\nExibir todos os Elementos da fila: ");

fila.printQueue();//Exibe todos elementos da pilha

console.log("\nRemover Elemento: " + fila.dequeue());// Remove o elemento do COMEÇO da fila

console.log("\nExibir todos os Elementos da fila: ");

fila.printQueue();

console.log("\nExibir o Primeiro Elemento da fila: " + fila.peek()); // exibe, mas não remove, o elemento que está sendo apontado pelo ponteiro HEAD desta fila (o primeiro elemento), ou retornar nulo se esta fila estiver vazia.

console.log("\nExibir o Tamanho da fila: " + fila.count());// Retorna o numero de elementos na fila

console.log("\nChecar se o Elemento 4 existe na fila? " + fila.contains(4)); // Checar se o elemento existe

fila.clear();// Limpa a fila toda

console.log("\nA fila está vazia? " + fila.isEmpty());// Verifica se está vazia