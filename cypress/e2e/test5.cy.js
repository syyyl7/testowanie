Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Widok profilu uzytkownika', () => {
  before(() => {
    cy.visit('https://www.kurnik.pl/login.phtml');

    cy.get('button').contains('zaloguj').click();
  
  
    cy.get('input[name="username"]').type('newuser126');
    cy.get('input[name="pw"]').type('password123');


    cy.get('button').contains('zaloguj').click();

  });

  it('widok profilu uzyytkownika', () => {

    cy.visit('https://www.kurnik.pl/');

    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      }).as('windowOpen');
    });

    cy.get('select[onchange*="window.open"]').should('contain', '-- newuser126 --');

    cy.get('select[onchange*="window.open"]').select('/prof.phtml');


    cy.get('@windowOpen').should('be.called');

    cy.url().should('include', '/prof.phtml');

    cy.contains('jeśli nie masz jeszcze 13 lat, zapytaj rodziców, co możesz tu podać').should('be.visible');
  });
});





