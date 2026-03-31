class LoginPage {

  visit() {
    cy.visit('/');
  }

  login(user, pass) {
    cy.get('#user-name').type(user);
    cy.get('#password').type(pass);
    cy.get('#login-button').click();
  }

  validarError(texto) {
    cy.get('[data-test="error"]').should('contain', texto);
  }

}

export default new LoginPage();