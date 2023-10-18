import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'widget/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = () => (
  <ArticlesPageFilters />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StyleDecorator(), StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  StyleDecorator(),
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
