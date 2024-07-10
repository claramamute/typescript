try {
    const resultado = converte(123);
  
    console.log(resultado);

} catch (error) {
    if (error instanceof Error) console.log("\n Você digitou um número. Digite um texto e tente novamente.");
    else console.log("\n Erro inesperado! Contate o adminstrador do sistema.");

} finally {
    console.log("\n Fim da execução.");
}

export function converte(conteudo: any): string {
  return conteudo.toUpperCase();
}