import { URL } from "../support/e2e";

describe('template spec', () => {

  beforeEach(() => {
    cy.viewport(1080, 1080);
    cy.visit(URL);
  })

  it('clear button - should clear the form', () => {
    cy.getByData('name').type('Satyabrat Jha')
    cy.getByData('email').type('satyabrat@gmail.com')
    cy.getByData('clear').click()

    cy.getByData('name').should('have.value', '')
    cy.getByData('email').should('have.value', '')
    cy.get('[data-HAY="HAY"] input:checked').should('not.exist')
  })

  it('on submitting an empty form - should show an error message', () => {
    cy.getByData('submit').click()

    cy.getByData('errorMsg').should('be.visible')
  })

  it('on submitting a filled form - should show user greeting and subscription message', () => {
    const name = 'Satyabrat Jha'
    const email = 'satyabrat@gmail.com'

    cy.getByData('name').type(name)
    cy.getByData('email').type(email)
    cy.get('[data-HAY="HAY"] input[value="Awsome"]').check()
    cy.getByData('submit').click()

    cy.getByData('greet').should('contain.text', `Good Morning, ${name}`)
    cy.getByData('success').should('contain.text', `${email} successfully subscribed the newsletter.`)
    cy.get('[data-HAY="HAY"] input:checked').should('have.value', 'Awsome')
    cy.getByData('submit').should('be.disabled')
  })

})