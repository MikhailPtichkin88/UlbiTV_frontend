import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StarRating } from './StarRating'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = () => <StarRating />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
