import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StarRating } from './StarRating'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

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
Normal.decorators = [StyleDecorator()]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
Dark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]
