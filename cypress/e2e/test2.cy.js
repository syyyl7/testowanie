describe('Wyszukiwanie', () => {
  it('szukanie destynacji', () => {
    cy.visit('https://www.wakacje.pl/')
    cy.get('input[placeholder="Wpisz nazwę destynacji"]').type('Grecja')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/search')
    cy.get('.search-results').should('contain', 'Grecja')
  })
})
