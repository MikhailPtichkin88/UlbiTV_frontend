import {
  ArticleBlockType,
  ArticleType,
} from './../../../src/entities/Article/model/consts/consts'
import { Article } from './../../../src/entities/Article/model/types/article'
/* eslint-disable @typescript-eslint/no-namespace */
export const updateProfile = (name: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click()
  cy.getByTestId('ProfileCard.firstname').clear().type(name)
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

const mockArticle: Article = {
  id: '61',
  title: 'Data Visualization in Python',
  subtitle: 'Best Python Libraries for Data Visualization',
  img: 'https://img.freepik.com/free-vector/technological-falling-particles-dark-background_52683-17130.jpg?w=1060&t=st=1688282199~exp=1688282799~hmac=a7b0235c59f5a1830ea52d89fb6976f7813f58baa1f43e47b821973be683bad6',
  views: 907,
  createdAt: '08.07.2022',
  userId: '2',
  type: [ArticleType.DATA_SCIENCE],
  user: { id: '1', username: 'test' },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Introduction to Data Visualization',
      paragraphs: [
        'Data visualization is a graphical representation of information and data to help in understanding patterns, trends, and insights.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=1060&t=st=1688282323~exp=1688282923~hmac=44932dcb4985f004b15ffbdd8a2b2a98dcd4fafb93e05e48339fd629cb930797',
      title: 'Image 1 - Data Visualization',
    },
  ],
}

export const createArticle = (article?: Article) => {
  cy.request({
    method: 'POST',
    url: `http://localhost:8000/articles`,
    headers: { Authorization: 'random_text' },
    body: article ?? mockArticle,
  }).then(({ body }) => body)
}

export const removeArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'random_text' },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
