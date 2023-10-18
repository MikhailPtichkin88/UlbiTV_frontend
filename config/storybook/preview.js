import { addDecorator } from '@storybook/react'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'
import { SuspenseDecorator } from '@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { Theme } from '@/app/providers/ThemeProvider/index'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#e8e8ea' },
      { name: 'dark', class: Theme.DARK, color: '#0452ff' },
      { name: 'green', class: Theme.GREEN, color: '#006a58' },
    ],
  },
}

// addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator('/'))
addDecorator(SuspenseDecorator)
addDecorator((StoryComponent) => (
  <div className="app">
    <StoryComponent />
  </div>
))
