describe('template spec', () => {
  
  beforeEach(()=>{
    cy.visit("http://localhost:5173/")
  })

  it('Clearing the form data', () => {
    cy.getByData("form").should("exist");
    cy.getByData("name").type('Rahul');
    cy.getByData("email").type('rahul@gmail.com');
    cy.getByData("HAY").find('input').eq(1).click();
    cy.getByData("clear").click();
  })

  it('Displaying error message on submitting empty form', () => {
    cy.getByData("form").should("exist");
    cy.getByData("errorMsg").should("not.exist");
    cy.getByData("submit").click();
    cy.getByData("errorMsg").should("exist");
  })

  it('On submission of form subscribing the news letter', () => {
    cy.getByData("form").should("exist");
    cy.getByData("name").type('Rahul');
    cy.getByData("email").type('rahul@gmail.com');
    cy.getByData("HAY").find('input').eq(1).click();
    cy.getByData("submit").click();
    cy.getByData("greet").contains("Good Morning, Rahul");
    cy.getByData("success").contains("**rahul@gmail.com successfully subscribed the newsletter.");
    cy.getByData("submit").should('not.be.enabled');
  });
})