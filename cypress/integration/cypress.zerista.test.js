/// <reference types="Cypress" />

const loginOnLoginPage = () => {
  cy.visit('https://my.staging.zerista.io/login')
  cy
    .get('input[type=text]')
    .type(Cypress.env('username'))
  cy
    .get('input[type=password]')
    .type(Cypress.env('password'))
  cy
    .contains('Login')
    .click()

}



describe('Cypress Proof of Concept: Zerista', () => {

  beforeEach(loginOnLoginPage)

  it('should have logged in', () => {
    cy.visit('https://michael-test.staging.zerista.io')
    cy.url().should('eq', 'https://michael-test.staging.zerista.io/')
  })
})