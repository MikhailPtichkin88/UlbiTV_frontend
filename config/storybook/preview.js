import { addDecorator } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
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
}

addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator('/'))
addDecorator(SuspenseDecorator)
