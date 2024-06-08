Cypress.on('uncaught:exception', (err, runnable) => {
  
  return false;
});

describe('Wejscie do gry jako gosc', () => {
  it('wejscie do gry jako gosc', () => {
    cy.visit('https://www.kurnik.pl/');

    
    cy.get('a[href="/szachy/"]').contains('szachy').click();

    
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      }).as('windowOpen');
    });

    
    cy.get('button').contains('gość').click();

    cy.get('@windowOpen').should('be.called').then((stub) => {
      const url = stub.args[0][0];
      cy.visit(url);
    });

    cy.url().should('include', '/szachy');
    
  });
});
