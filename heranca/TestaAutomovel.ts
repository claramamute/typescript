import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";

const t1: Transporte = new Transporte(5) //Objeto da classe transporte criado
t1.visualizar();

const t2: Terrestre = new Terrestre(5,2,250);
t2.visualizar();