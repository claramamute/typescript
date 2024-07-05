export abstract class Pessoa{
    private _nome: string;


	constructor(nome: string) {
		this._nome = nome;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

    public visualizar(): void{
        console.log("***************************************");
        console.log("           Dados da Pessoa             ");
        console.log("***************************************");
        console.log("Nome da pessoa: ", this._nome);
    }

}