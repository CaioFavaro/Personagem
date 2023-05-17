import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    static tipo = 'Guerreiro'
    static descricao = 'Um forte Guerreiro!'
    forca

    constructor(nome, forca) {
        super(nome);
        this.forca = forca
    }

    obterInsignia() {
        if (this.level >= 7 && this.forca >= 10)
            return `Guerreiro furioso`

        return super.obterInsignia();
    }
}
