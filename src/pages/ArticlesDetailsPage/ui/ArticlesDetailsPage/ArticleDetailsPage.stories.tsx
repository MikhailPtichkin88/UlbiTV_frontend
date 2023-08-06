import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleDetailsPage } from 'pages/ArticlesDetailsPage'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticleType, ArticleView } from 'entities/Article'
import { ArticleBlockType } from 'entities/Article/model/types/article'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = () => (
  // <MemoryRouter initialEntries={[`/articles/1`]}>
  <ArticleDetailsPage />
  // </MemoryRouter>
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
  StoreDecorator({
    articleDetailsPage: {
      comments: {
        isLoading: false,
        error: undefined,
        ids: ['1', '2'],
        entities: {
          //mock data
          '1': {
            id: '1',
            text: 'comment 1',
            user: {
              id: '1',
              username: 'ulbi tv',
              avatar:
                'https://logowik.com/content/uploads/images/homer-simpson4924.jpg',
            },
          },

          '2': {
            id: '2',
            text: 'comment 2',
            user: {
              id: '1',
              username: 'ulbi tv',
              avatar:
                'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/02/17/10/homersimpson1702a.jpg?width=1200',
            },
          },
        },
      },
      recommendations: {
        isLoading: false,
        error: undefined,
        ids: ['1'],
        entities: {
          '1': {
            id: '1',
            title: 'Python news',
            subtitle: "What's new in Python for 2022?",
            img: 'https://cdn-edge.kwork.ru/pics/t3/05/21311018-1655653505.jpg',
            views: 812,
            createdAt: '01.03.2020',
            type: [ArticleType.IT],
            blocks: [
              {
                id: '1',
                type: ArticleBlockType.TEXT,
                title: 'Title of this block',
                paragraphs: [
                  'Python is a widely-used programming language known for its simplicity and versatility.',
                ],
              },
              {
                id: '4',
                type: ArticleBlockType.CODE,
                code: "print('Hello, world!')",
              },
              {
                id: '2',
                type: ArticleBlockType.IMAGE,
                src: 'https://cdn-edge.kwork.ru/pics/t3/05/21311018-1655653505.jpg',
                title: 'Image 1 - Python logo',
              },
            ],
          },
        },
      },
    },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
