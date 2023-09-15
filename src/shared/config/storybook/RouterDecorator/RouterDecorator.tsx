// import { Story } from '@storybook/react'
import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (baseUrl: string) => (StoryComponent: Story) => {
  return (
    <BrowserRouter basename={baseUrl}>
      <StoryComponent />
    </BrowserRouter>
  )
}
