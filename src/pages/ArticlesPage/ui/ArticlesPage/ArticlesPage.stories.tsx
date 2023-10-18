import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import '@/app/styles/index.scss'
import { ArticleType, ArticleView } from '@/entities/Article'
import { ArticleBlockType } from '@/entities/Article/model/consts/consts'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import ArticlesPage from './ArticlesPage'

const mockStore = {
  articlesPage: {
    isLoading: true,
    error: undefined,
    page: 1,
    limit: 9,
    hasMore: false,
    view: ArticleView.SMALL,
    order: 'asc' as const,
    type: ArticleType.ALL,
    ids: ['1', '2', '3', '4'],
    entities: {
      '1': {
        id: '1',
        title: 'JS news',
        subtitle: "What's new in JS for 2022?",
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1023,
        createdAt: '05.01.2020',
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
      '2': {
        id: '2',
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
      '3': {
        id: '3',
        title: 'Java news',
        subtitle: "What's new in Java for 2022?",
        img: 'https://fuzeservers.ru/wp-content/uploads/6/8/c/68c002704dca9c8f6316be783e593de6.jpeg',
        views: 742,
        createdAt: '17.02.2020',
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
      '4': {
        id: '4',
        title: 'C++ news',
        subtitle: "What's new in C++ for 2022?",
        img: 'https://avatars.mds.yandex.net/i?id=c1725c463e1a86ad1b3583f52792a88e4922c159-9147461-images-thumbs&n=13',
        views: 982,
        createdAt: '01.04.2021',
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
    _inited: true,
  },
}

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator(mockStore)]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(mockStore)]
