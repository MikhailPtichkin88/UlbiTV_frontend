// import { Story } from '@storybook/react'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator =
  (baseUrl: string) => (story: () => ReactNode) => {
    return <BrowserRouter basename={baseUrl}>{story()}</BrowserRouter>
  }
