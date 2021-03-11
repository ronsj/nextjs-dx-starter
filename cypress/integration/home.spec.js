// EXAMPLE

describe('Home', () => {
  it('should display a title', () => {
    cy.visit('https://localhost:3000')
    cy.get('main > h1').contains('Hello')
  })
})
