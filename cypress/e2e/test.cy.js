describe('Strona glowna', () => {
  it('Wyswietlenie strony', () => {
    cy.visit('https://www.wakacje.pl/')
    cy.get('header').should('be.visible')
    cy.get('.main-content').should('be.visible')
  })
})
