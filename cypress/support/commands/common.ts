/* eslint-disable @typescript-eslint/no-namespace */
import { User } from '../../../src/entities/User'
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage'
import { selectByTestId } from '../../helpers/selectByTestId'

export const login = (username = 'test_user', password = '123') => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
    return body
  })
}

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId))
}

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
