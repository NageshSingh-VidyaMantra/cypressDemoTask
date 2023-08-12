describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
describe('Empty Form Fields Test', () => {
  it('Should show an error message when form fields are empty', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-submit="submit"]').click()
    cy.get('[data-errorMsg="errorMsg"]').should('be.visible')
  })
})

describe('specs', ()=>{
  it('Form should get cleared', () => {
    cy.getByData("form").should("exist");
    cy.getByData("name").type('Aman');
    cy.getByData("email").type('aman12@gmail.com');
    cy.getByData("clear").click();
  })

})

