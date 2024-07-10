// A ideia central destes Métodos é iterar (percorrer) o array e, a cada elemento, realizar alguma ação, seja uma ação de filtragem, mapeamento, transformação, etc.

let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];


console.log("\nmap() - Multiplicar todos os números por 3 e retornar um novo array\n"); //map cria um novo array depois do processamento 

let numerosMap = numeros.map(num => num*3)
console.dir(numerosMap)

console.log("\nfilter() - Listar todos os Estados que contém a palavra Rio\n");// gera um novo array com os elementos de acordo com a filtragem 
let estadosRio = estados.filter( e => e.includes('Rio'));
console.dir(estadosRio)

 
console.log("\nincludes() - Checar se existe na lista o Estado de Minas Gerais\n"); //O método includes() retorna true se o array contiver um elemento correspondente ao elemento procurado ou false se não contiver.
let estadoMinasGerais = estados.includes("Minas Gerais");
console.log(estadoMinasGerais)
 
console.log("\nreduce() - Remover todos os elementos repetidos do array estados\n");// Usada para consolidação de dados -> condensar todos os valores em um único valor (tirar dados repetidos)
let estadosSemRepeticoes = estadosRepetidos.reduce((acumulador: string[],  estado) => {// Iniciou vetor vazio e le cada estado dentro de estadosRepetidos
    
    if(acumulador.indexOf(estado) === -1){//checa dentro do array se o estado não existe 
        acumulador.push(estado)// se não existir, ele será adicionado 
    }
    return acumulador //caso exista, vai ser ignorado 
}, []) // retorna um array 

console.dir(estadosSemRepeticoes)

 
console.log("\nfind() - Encontrar o primeiro número da lista maior do que 9\n");
let numeroMaior9 = numerosRepetidos.find(n => n > 9);
console.log(numeroMaior9);
 
console.log("\nfindIndex() - Encontrar o Índice do primeiro número da lista maior do que 9\n");
let posicaoNumeroMaior9 = numerosRepetidos.findIndex(n => n > 9);
console.log(posicaoNumeroMaior9);
 
console.log("\nspread - Combinar 2 arrays\n"); // Operador de espalhamento ...

//Crie um array com todos elementos de numeros e numerosDesordenado
const arrayCombinado: number[] = [...numeros, ...numerosDesordenados]
console.dir(arrayCombinado)