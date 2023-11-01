describe('Articles page enter', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`articles`)
    })
  })
  // afterEach(() => {
  //   cy.resetProfile(profileId)
  // })
  it('Articles must be greater than 3', () => {
    cy.getByTestId('ArticlesVirtualList').should('exist')
    cy.getByTestId('ArticlesVirtualList').should('have.length.greaterThan', 3)
  })
})
