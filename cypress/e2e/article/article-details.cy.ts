let currentArticleId = ''
describe('Article details page enter', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      currentArticleId = article.id
      cy.log(JSON.stringify(article))
      cy.visit(`articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })
  it('Article details page content rendering', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })
  it('Article details page recommendations rendering', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })
  it('Article details page comment creating', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment()
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })
  it('Article details left 3 star rating', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(3, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 3)
  })
})
