import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppImage } from './AppImage'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'shared/AppImage',
  component: AppImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    loki: {
      skip: ['Dark'],
    },
  },
} as ComponentMeta<typeof AppImage>

const Template: ComponentStory<typeof AppImage> = () => <AppImage />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
