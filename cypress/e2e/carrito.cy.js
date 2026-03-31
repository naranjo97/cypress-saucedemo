import loginPage from '../pages/loginPage';
import inventoryPage from '../pages/inventoryPage';

describe('Carrito', () => {

  beforeEach(() => {
    loginPage.visit();
    cy.login('standard_user', 'secret_sauce');
  });

  it('Agregar producto al carrito', () => {
    inventoryPage.agregarPrimerProducto();
    inventoryPage.validarCarrito(1);
  });

});