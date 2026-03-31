class InventoryPage {

  agregarPrimerProducto() {
    cy.get('.inventory_item').first().find('button').click();
  }

  validarCarrito(cantidad) {
    cy.get('.shopping_cart_badge').should('contain', cantidad);
  }

}

export default new InventoryPage();