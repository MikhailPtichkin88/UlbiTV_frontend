import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleDetailsPage } from '@/pages/ArticlesDetailsPage'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticleType, ArticleView } from '@/entities/Article'
import { Article } from '@/entities/Article/model/types/article'
import { ArticleBlockType } from '@/entities/Article'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'

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

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'Ulbi tv',
  },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
}

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({ articleDetails: { data: article } })]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({ articleDetails: { data: article } }),
]

const mockData = {
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
}
