import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(){
        super();
        this.setTitle("Ementa");

    }

    async getHtml(){
        return `
        
            <h1>EMENTA</h1>

            <p>O componente curricular trabalha os conceitos básicos e tecnologias que envolvem o desenvolvimento de sistemas Web</p>

        `;
    }


}