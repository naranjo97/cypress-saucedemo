describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Login exitoso con usuario válido', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory');
    cy.get('.app_logo').should('contain', 'Swag Labs');
  });

  it('Login fallido muestra mensaje de error', () => {
    cy.get('#user-name').type('wrong_user');
    cy.get('#password').type('wrong_pass');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
  });

  it('Usuario bloqueado no puede ingresar', () => {
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'locked out');
  });

  it('Agregar producto al carrito', () => {
  cy.visit('/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();

  cy.get('.inventory_item').first().find('button').click();
  cy.get('.shopping_cart_badge').should('contain', '1');
});
});

