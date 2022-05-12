import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(){
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Desenvolvimento Back-End I</h1>
    
            <p>
                1-IDENTIFICAÇÃO<br><br>
                CURSO:Especialização em Especialização em Desenvolvimento Web <br><br>
                Componente Curricular: DesenvolvimentoBack-EndI 
            </p>
        `;
    }

}

