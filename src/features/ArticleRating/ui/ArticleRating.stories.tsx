import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArticleRating from './ArticleRating'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
    withMock,
  ],
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  articleId: '1',
}
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/article-ratings?userId=1&articleId=1',
      method: 'GET',
      status: 200,
      response: [{ rate: 4, feedback: '111111' }],
    },
  ],
}
Normal.decorators = [StyleDecorator({ maxWidth: 500 })]

export const WithoutRateDark = Template.bind({})
WithoutRateDark.args = { articleId: '1' }
WithoutRateDark.decorators = [
  StyleDecorator({ maxWidth: 500 }),
  ThemeDecorator(Theme.DARK),
]
WithoutRateDark.parameters = {
  mockData: [
    {
      url: __API__ + '/article-ratings?userId=1&articleId=1',
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
}
