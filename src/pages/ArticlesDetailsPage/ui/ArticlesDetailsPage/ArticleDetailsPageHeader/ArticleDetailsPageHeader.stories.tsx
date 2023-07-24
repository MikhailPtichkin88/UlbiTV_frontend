import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
     title: '/ArticleDetailsPageHeader',
     component: ArticleDetailsPageHeader,
     argTypes: {
      backgroundColor: { control: 'color' },
      },
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = () => (
      <ArticleDetailsPageHeader />
    )

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]