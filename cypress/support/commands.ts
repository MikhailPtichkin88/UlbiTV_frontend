/* eslint-disable @typescript-eslint/no-namespace */

import { login } from './commands/login'

Cypress.Commands.add('login', login)
declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<void>
    }
  }
}
export {}
