describe('My First Test', () => {
    it('Visits The Debate Homepage', () => {
      cy.visit('http://localhost:3000')
      cy.contains('I agree')
      cy.contains('I disagree')
      cy.contains('I agree').click()
      cy.url().should('include', '/debate')
    })
  })
  