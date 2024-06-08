Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Gra w Słowoku', () => {
  it('Gra w słowoku', () => {
    
    cy.visit('https://www.kurnik.pl/');

    cy.get('a').contains('SŁOWOKU').click();

    
      cy.get('select').select('5-LITER, ŁATWY', { force: true });
      cy.get('button').contains('ODGADNIJ LOSOWE').click({ force: true });
      cy.wait(1000); 
      cy.contains('ODGADNIJ SŁOWO, LOSOWE 1').should('be.visible');



    cy.url().should('include', '/slowoku');

    cy.contains('SŁOWOKU').should('be.visible');
    const letters = ['A', 'S', 'D', 'F', 'G'];
    letters.forEach(letter => {
      cy.get('button').contains(letter).click({ force: true });
    });

 
    cy.wait(1000);
    cy.contains('NIE MA TAKIEGO SŁOWA').should('be.visible');
    
  });
});



