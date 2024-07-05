import { Triatleta } from "./Triatleta";

export function main() {

    const triatleta: Triatleta = new Triatleta("Clara");
    triatleta.visualizar();
    triatleta.aquecer();
    triatleta.pedalar();
    triatleta.correr();
    triatleta.nadar();
    triatleta.cansar();
    
}

main();