describe('Clear Form Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-name="name"]').type('John Doe')
    cy.get('[data-email="email"]').type('johndoe@example.com')
    cy.get('#Fantastic').check()
    cy.get('[data-clear="clear"]').click()
    cy.get('[data-name="name"]').should('have.value', '')
    cy.get('[data-email="email"]').should('have.value', '')
  })
})

describe('Empty Form Fields Test', () => {
  it('Should show an error message when form fields are empty', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-submit="submit"]').click()
    cy.get('[data-errorMsg="errorMsg"]').should('be.visible')
  })
})

describe('On Submitting the filled Form Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-name="name"]').type('John Doe')
    cy.get('[data-email="email"]').type('johndoe@example.com')
    cy.get('#Fantastic').check()
    cy.get('[data-submit="submit"]').click()
    cy.get('[data-success="success"]').should('be.visible')

  })
})