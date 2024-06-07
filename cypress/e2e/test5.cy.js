describe('Kontakt', () => {
  it('Przejscie do strony "Kontakt"', () => {
    cy.visit('https://www.wakacje.pl/')
    cy.get('footer').within(() => {
      cy.contains('Kontakt').click()
    })
    cy.url().should('include', '/kontakt')
    cy.get('.contact-page').should('be.visible')
  })
})
