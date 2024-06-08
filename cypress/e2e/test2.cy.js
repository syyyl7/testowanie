Cypress.on('uncaught:exception', (err, runnable) => {

  return false;
});
describe('Logowanie', () => {
  it('powinno zalogowac sie na istniejacym koncie uzytkownika', () => {
 
    cy.visit('https://www.kurnik.pl/login.phtml');
    cy.get('button').contains('zaloguj').click();
  

    cy.get('input[name="username"]').type('newuser126');
    cy.get('input[name="pw"]').type('password123');


    cy.get('button').contains('zaloguj').click();
    cy.get('select[onchange*="window.open"]').should('exist')
      .and('contain', '-- newuser126 --');
  });
});

