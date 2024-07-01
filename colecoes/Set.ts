const frutas: Set<string> = new Set<string>();

frutas.add('Kiwi')
frutas.add('Kiwi')
frutas.add('Caqui')
frutas.add('Maça')
frutas.add('Manga')

//Coleção Set não possui indice 
//Acesso mais rápido do que array
//Dados não se repetem 
//Em banco de dados

console.table(frutas)

console.log(`\n A fruta Caqui existe? ${frutas.has('Caqui')}`)

frutas.delete('Manga')

console.table(frutas)
