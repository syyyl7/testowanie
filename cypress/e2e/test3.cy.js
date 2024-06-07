describe('Filtrowanie', () => {
  it('Filtrowanie - cena', () => {
    cy.visit('https://www.wakacje.pl/')
    cy.get('input[placeholder="Wpisz nazwę destynacji"]').type('Grecja')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/search')
    cy.get('.filter-price-range').within(() => {
      cy.get('input.min-price').clear().type('1000')
      cy.get('input.max-price').clear().type('5000')
    })
    cy.get('button.apply-filters').click()
    cy.get('.search-results').should('contain', 'Grecja')
  })
})
