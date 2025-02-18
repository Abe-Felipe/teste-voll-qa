class   mainPage{

    selectorsList(){
        const selectors = {
            contaBancaria: ".bg-white",
        }

        return selectors
    }

    clickConta(){
        cy.get(this.selectorsList().contaBancaria)
    }

}

export default mainPage