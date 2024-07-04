import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre{

    private _cor: string;
    private _numeroPortas: number;
    private _marcha: number;
    private _placa: string;


	constructor(capacidade: number, numeroRodas: number, velocidade: number,cor: string, numeroPortas: number, marcha: number, placa: string) {
        super(capacidade, numeroRodas, velocidade)//puxa os atrubutos dos construtores das classes anteriores
        this._cor = cor;
		this._numeroPortas = numeroPortas;
		this._marcha = marcha;
		this._placa = placa;
	}


	public get cor(): string {
		return this._cor;
	}


	public get numeroPortas(): number {
		return this._numeroPortas;
	}

	public get marcha(): number {
		return this._marcha;
	}

  
	public get placa(): string {
		return this._placa;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set numeroPortas(value: number) {
		this._numeroPortas = value;
	}

	public set marcha(value: number) {
		this._marcha = value;
	}


	public set placa(value: string) {
		this._placa = value;
	}
    
    //Sobrescrita
    public visualizar(): void { //Polimorfismo, ter um método de mesmo nome na classe e na subclasse, mas com algumas coisas diferentes - reescrever o método

		super.visualizar();
		console.log("cor: " + this._cor);
		console.log("Número de portas: " + this._numeroPortas);
		console.log("Placa: " + this._placa);
		console.log("Marcha: " + this._marcha);
		
	}

}