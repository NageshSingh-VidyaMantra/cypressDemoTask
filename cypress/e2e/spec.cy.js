describe('template spec', () => {
  
    beforeEach(()=>{
      cy.visit("http://localhost:5173/")
    })
  
    it('Form should get cleared', () => {
      cy.getByData("name").type('Palash Kumar');
      cy.getByData("email").type('palashVidmantra@gmail.com');
      cy.getByData("HAY").find('input').eq(1).click();
      cy.getByData("clear").click();
    })
  
    it('Error message should be displayed', () => {
      cy.getByData("errorMsg").should("not.exist");
      cy.getByData("submit").click();
      cy.getByData("errorMsg").should("exist");
    })
  
    it('Subscribed NewsLetter', () => {
      cy.getByData("name").type('Palash Kumar');
      cy.getByData("email").type('palashVidmantra@gmail.com');
      cy.getByData("HAY").find('input').eq(1).click();
      cy.getByData("submit").click();
      cy.getByData("greet").contains("Good Morning, Palash");
      cy.getByData("success").contains("**palashVidmantra@gmail.com successfully subscribed the newsletter.");
      cy.getByData("submit").should('not.be.enabled');
    })
  
  })