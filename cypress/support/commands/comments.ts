/* eslint-disable @typescript-eslint/no-namespace */

export const addComment = (text?: string) => {
  cy.getByTestId('AddCommentForm.Input').type(text ?? 'test')
  cy.getByTestId('AddCommentForm.Button').click()
}

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text?: string): Chainable<void>
    }
  }
}
