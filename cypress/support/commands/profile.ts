/* eslint-disable @typescript-eslint/no-namespace */

export const updateProfile = (name: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click()
  cy.getByTestId('ProfileCard.firstname').clear().type(name)
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'random_text' },
    body: {
      id: '5',
      first: 'Test user',
      lastname: 'Cypress',
      age: 28,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'test_user',
      avatar:
        'https://logowik.com/content/uploads/images/homer-simpson4924.jpg',
    },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(name: string, lastname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
