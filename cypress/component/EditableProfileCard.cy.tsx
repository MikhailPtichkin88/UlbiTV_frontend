import { EditableProfileCard } from '@/features/editableProfileCard'
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender'

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
    cy.mount(
      <TestProvider
        options={{ initialState: { user: { authData: { id: '1' } } } }}
      >
        <EditableProfileCard id="1" />
      </TestProvider>
    )
  })
})
