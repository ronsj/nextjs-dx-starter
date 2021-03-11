// EXAMPLE

describe('Home', () => {
  it('should display a title', () => {
    cy.visit('https://localhost:3177')
    cy.get('main > h1').contains('Hello')
  })
})
