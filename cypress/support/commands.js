Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Marcos");
  cy.get("#lastName").type("Asd");
  cy.get("#email").type("email@email.com");
  cy.get("#open-text-area").type("Help");
  //cy.get('.button[type="submit"]').click()
  cy.contains("button", "Enviar").click();
});