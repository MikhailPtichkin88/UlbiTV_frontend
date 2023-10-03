import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RatingCard } from './RatingCard'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'entity/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = () => <RatingCard />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
