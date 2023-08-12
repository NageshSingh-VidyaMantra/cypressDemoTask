describe('Nagesh cypress test', () => {
  it('inputs success test', () => {
    cy.getByData("name").type("suresh");
    cy.getByData("email").type("suresh@ghil.com");
    cy.getByData("submit").click();
    cy.getByData("submit").type("Submitted");
    cy.getByData("success").type("**suresh@ghil.com successfully subscribed the newsletter.");
  })

  it('inputs fail test', () => {
    cy.getByData("name").type("suresh");
    cy.getByData("email").type("sureshghilcom");
    cy.getByData("submit").click();
    cy.getByData("errorMsg").type("**All fields are required.");
  })
})