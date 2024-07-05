import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor, Ciclista, Nadador{ //Herda Pessoa e implementa métodos das determinadas interfaces
    constructor(nome:string){
        super(nome)
    }
    aquecer(): void{
        console.log("Aquecendo...")
    }
    correr(): void {
        console.log("Correndo...");
    }
    
    pedalar(): void {
        console.log("Pedalando...");
    }
     
    nadar(): void {
        console.log("Nadando...");
    }
    
    public cansar(): void {
        console.log("Cansou!");
    }
}