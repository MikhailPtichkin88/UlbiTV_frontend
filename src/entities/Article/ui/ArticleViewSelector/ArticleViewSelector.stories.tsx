import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import {
  Article,
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from '../../model/types/article'
import { ArticleViewSelector } from './ArticleViewSelector'

export default {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleViewSelector>

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}

export const Small = Template.bind({})
Small.args = {}
Small.decorators = [ThemeDecorator(Theme.DARK)]
