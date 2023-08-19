describe('For Tests', () => {
  it('All Cleared', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.getByData('clear').click()
    cy.getByData('name').should('have.value', '')
    cy.getByData('email').should('have.value', '')
    cy.getByData('HAY').find('[type=radio]').should('not.be.checked')
  })

  it('Error message on Empty Submit', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.getByData('submit').click()
    cy.getByData('errorMsg').should('be.visible')
  })

  it('On Submit Filled Form', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.getByData('name').type('Mohd Saqib')
    cy.getByData('email').type('saqib@gmail.com')
    cy.getByData('submit').click();
    cy.getByData('greet').should('include.text', 'Mohd Saqib')
    cy.getByData('success').should('be.visible')
    cy.getByData('submit').should('be.disabled')
  })
})