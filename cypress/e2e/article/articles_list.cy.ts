describe('Articles page enter', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`articles`)
    })
  })

  it('Пример на стабах (фикстурах)', () => {
    //пауза для подгрузки виртуального списка
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
    cy.getByTestId('ArticlesVirtualList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
})
