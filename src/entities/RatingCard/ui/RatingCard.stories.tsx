import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RatingCard } from './RatingCard'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = () => <RatingCard />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StyleDecorator({ maxWidth: 500 })]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  StyleDecorator({ maxWidth: 500 }),
  ThemeDecorator(Theme.DARK),
]
