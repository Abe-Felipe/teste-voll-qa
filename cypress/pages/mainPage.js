class   mainPage{

    selectorsList(){
        const selectors = {
            contaBancaria: ".bg-white",
        }

        return selectors
    }

    clickCB1() {
        cy.get(this.selectorsList().contaBancaria).eq(0).click()
    }
    
    checkCB1() {
        cy.contains('João Silva').should('be.visible')
    }

}

export default mainPage