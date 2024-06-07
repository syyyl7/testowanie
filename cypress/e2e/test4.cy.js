describe('Oferty', () => {
  it('Przegladanie ofert', () => {
    cy.visit('https://www.wakacje.pl/')
    cy.get('input[placeholder="Wpisz nazwę destynacji"]').type('Grecja')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/search')
    cy.get('.search-results .offer').first().click()
    cy.url().should('include', '/offer')
    cy.get('.offer-details').should('be.visible')
  })
})
