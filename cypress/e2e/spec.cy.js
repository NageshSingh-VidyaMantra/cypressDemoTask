describe('template spec', () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  it('Form should get cleared', () => {
    cy.getByData("form").should("exist");
    cy.getByData("name").type('Mohd Umar');
    cy.getByData("email").type('umar231294@gmail.com');
    cy.getByData("clear").click();
  })

  it('Error message should be displayed', () => {
    cy.getByData("form").should("exist");
    cy.getByData("errorMsg").should("not.exist");
    cy.getByData("submit").click();
    cy.getByData("errorMsg").should("exist");
  })

  it('Subscribed NewsLetter', () => {
    cy.getByData("form").should("exist");
    cy.getByData("name").type('umar');
    cy.getByData("email").type('umar231294@gmail.com');
    cy.getByData("HAY").find('input').eq(1).click();
    cy.getByData("submit").click();
    cy.getByData("greet").contains("Good Morning, umar");
    cy.getByData("success").contains("**umar231294@gmail.com successfully subscribed the newsletter.");
    cy.getByData("submit").should('not.be.enabled');
  })
})