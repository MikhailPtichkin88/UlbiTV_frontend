import { selectByTestId } from '../../helpers/selectByTestId'

describe('Routing: not authorized', () => {
  it('Main page', () => {
    cy.visit('/')
    cy.get(selectByTestId('MainPage')).should('exist')
  })
  it('Profile page: redirect when not authorized', () => {
    cy.visit('/profile/1')
    cy.get(selectByTestId('MainPage')).should('exist')
  })
  it('Not found page redirect', () => {
    cy.visit('/sdfsfegt3')
    cy.get(selectByTestId('NotFoundPage')).should('exist')
  })
})

describe('Routing: authorized', () => {
  beforeEach(() => {
    cy.login()
  })
  it('Profile page', () => {
    cy.visit('profile/1')
    cy.get(selectByTestId('ProfilePage')).should('exist')
  })
  it('Articles page', () => {
    cy.visit('articles')
    cy.get(selectByTestId('ArticlesPage')).should('exist')
  })
})
