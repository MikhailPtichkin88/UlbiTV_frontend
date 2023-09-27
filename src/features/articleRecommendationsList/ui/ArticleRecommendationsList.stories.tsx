import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import withMock from 'storybook-addon-mock'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Article, ArticleType } from '@/entities/Article'
import { ArticleBlockType } from '@/entities/Article/model/consts/consts'

export default {
  title: 'pages/ArticleDetailsPage/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = () => (
  <ArticleRecommendationsList />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=3',
      method: 'GET',
      status: 200,
      response: getMockData(),
    },
  ],
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
Dark.parameters = {
  mockData: [
    {
      url: __API__ + '/articles?_limit=3',
      method: 'GET',
      status: 200,
      response: getMockData(),
    },
  ],
}

function getMockData(): Article[] {
  return [
    {
      id: '2',
      title: 'Python news',
      subtitle: "What's new in Python for 2022?",
      img: 'https://cdn-edge.kwork.ru/pics/t3/05/21311018-1655653505.jpg',
      views: 812,
      createdAt: '01.03.2020',
      userId: '2',
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
      user: { id: '1', username: '123' },
    },
    {
      id: '3',
      title: 'Java news',
      subtitle: "What's new in Java for 2022?",
      img: 'https://fuzeservers.ru/wp-content/uploads/6/8/c/68c002704dca9c8f6316be783e593de6.jpeg',
      views: 945,
      createdAt: '13.03.2020',
      userId: '1',
      type: [ArticleType.IT],
      blocks: [
        {
          id: '1',
          type: ArticleBlockType.TEXT,
          title: 'Title of this block',
          paragraphs: [
            'Java is a popular programming language used for building a wide range of applications.',
          ],
        },
        {
          id: '4',
          type: ArticleBlockType.CODE,
          code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}',
        },
        {
          id: '2',
          type: ArticleBlockType.IMAGE,
          src: 'https://fuzeservers.ru/wp-content/uploads/6/8/c/68c002704dca9c8f6316be783e593de6.jpeg',
          title: 'Image 1 - Java logo',
        },
      ],
      user: { id: '1', username: '123' },
    },
    {
      id: '4',
      title: 'C++ news',
      subtitle: "What's new in C++ for 2022?",
      img: 'https://avatars.mds.yandex.net/i?id=c1725c463e1a86ad1b3583f52792a88e4922c159-9147461-images-thumbs&n=13',
      views: 510,
      createdAt: '15.03.2020',
      userId: '2',
      type: [ArticleType.IT],
      user: { id: '1', username: '123' },
      blocks: [
        {
          id: '1',
          type: ArticleBlockType.TEXT,
          title: 'Title of this block',
          paragraphs: [
            'C++ is a powerful programming language used for system-level development and high-performance applications.',
          ],
        },
        {
          id: '4',
          type: ArticleBlockType.CODE,
          code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, world!" << std::endl;\n    return 0;\n}',
        },
        {
          id: '2',
          type: ArticleBlockType.IMAGE,
          src: 'https://avatars.mds.yandex.net/i?id=c1725c463e1a86ad1b3583f52792a88e4922c159-9147461-images-thumbs&n=13',
          title: 'Image 1 - C++ logo',
        },
      ],
    },
  ]
}
