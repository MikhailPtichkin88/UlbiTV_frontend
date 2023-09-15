import { User } from 'entities/User'

export enum ArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  paragraphs: string[]
  title?: string
}

export interface ArticleImgBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  title: string
  src: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImgBlock

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'created',
}

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  DATA_SCIENCE = 'Data Science',
  DESIGN = 'Design',
  WEB_DEV = 'Web Dev',
  CYBERSECURITY = 'Cybersecurity',
  BLOCKCHAIN = 'Blockchain',
  AI = 'AI',
  MOBILE_DEV = 'Mobile Dev',
}
export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}
export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
  user: User
  userId?: string
}
