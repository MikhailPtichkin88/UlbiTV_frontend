import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'features/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    loki: {
      skip: ['Normal', 'Dark'],
    },
  },
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = () => (
  <ArticleDetailsComments id={'1'} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StyleDecorator({ maxWidth: 800 }), StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  StyleDecorator({ maxWidth: 800 }),
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
