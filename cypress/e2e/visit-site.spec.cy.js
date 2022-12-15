describe('Visit site', () => {
  it('Visits The-Debate website', () => {
    cy.visit('http://localhost:3000')
    cy.contains('I disagree')
    cy.contains('I agree').click()
    cy.url().should('include', '/debate')
    cy.contains('argument')
    cy.contains('Join the conversation').click()
    cy.url().should('include', '/discussion/pro')
  })
})
