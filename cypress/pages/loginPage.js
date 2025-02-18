class   loginPage{

    clickEntendi()  {
        cy.visit('https://rhuantac.github.io/vaga-qa/')
        cy.get('.bg-white > .w-full').click()
        cy.get('#dontShowAgain').should('not.exist')
        
    }
}

export default loginPage