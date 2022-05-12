import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(){
        super();
        this.setTitle("Conteudo");

    }

    async getHtml(){
        return `
        
            <h1>CONTEÚDO PROGRAMÁTICO</h1>

            <p>
                ● Estruturas de algoritmos: decisão simples e composta, repetição, vetoresematrizes,funções. <br><br>
                ● Estruturas de dados: listas lineares, busca linear, busca binária, pilhasefilas,algoritmos de ordenação como bolha, seleção, inserção, quicksort e mergesorteconceitos de árvores. <br><br>
                ● Orientação a Objetos: introdução à programação, tipos de classes, métodoseatributos, classes, objetos, encapsulamento, herança, abstração, polimorfismo, classesabstratas e interfaces;
            </p>

        `;
    }


}