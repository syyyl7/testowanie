describe('rejestracja', () => {
  it('rejestracja powinna przebiec pomyslnie', () => {
    cy.visit('https://www.kurnik.pl/login.phtml/');
    cy.get('a[href="/rejestracja.phtml"]').contains('załóż konto').click();
   // Adjust the selector based on the actual link text or button
    cy.get('input[name="username"]').type('newuser126');
    cy.get('input[name="pw1"]').type('password123');
    cy.get('input[name="pw2"]').type('password123');
    cy.get('input[name="email"]').type('newuser123@example.com');
    cy.get('button').contains('ok').click(); // Adjust the selector based on the actual button text
    cy.contains('OK, konto "newuser126" zarejestrowane.').should('be.visible'); // Adjust based on actual success message
  });
});


