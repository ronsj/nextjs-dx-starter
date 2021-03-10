// EXAMPLE

describe('Home', () => {
  it('should display a title', () => {
    cy.visit('http://localhost:3000')
    cy.get('main > h1').contains('Hello')
  })
})
