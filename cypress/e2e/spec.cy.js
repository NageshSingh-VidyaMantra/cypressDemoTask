describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  // Test Case 1: The Form should get cleared.
  it("Clear Button", () => {
    cy.getByData("form").should("exist");
    cy.getByData("name").type("Himanshu");
    cy.getByData("email").type("himanshu@vidyamantra.com");
    cy.getByData("HAY").find("input").eq(0).click();
    cy.getByData("clear").click();
    cy.log("Form Cleared");
    cy.getByData("form").click();
  })

  // Test Case 2:  👉🏻 An error message should get shown.
  it("Empty Form Submission", () => {
    cy.getByData("form").should("exist");
    cy.getByData("errorMsg").should("not.exist");
    cy.getByData("submit").click();
    cy.log("Empty form submitted");
    cy.getByData("errorMsg").should("exist");
  })

  /** Test Case 3: 
   * 👉🏻 User greeting message should be shown with his/her name.
   * 👉🏻 "< User email > subscribed the newsletter", should be visible.
   * 👉🏻 Submit button must be disabled.
  */
 it("Submit Filled Form", () => {
    cy.getByData("form").should("exist");
    cy.getByData("name").type("Himanshu");
    cy.getByData("greet").contains("Good Morning, Himanshu").should("be.visible");
    cy.getByData("email").type("himanshu@vidyamantra.com");
    cy.getByData("HAY").find("input").eq(0).click();
    cy.getByData("submit").click();
    cy.log("Form submitted");
    cy.getByData("success").contains("himanshu@vidyamantra.com successfully subscribed the newsletter.").should("be.visible")
    cy.getByData("submit").should('be.disabled');
  })
})