describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rhuantac.github.io/vaga-qa/')
    cy.get('.bg-white > .w-full').click
  })
})