import { User } from '@/entities/User'
import { ArticleBlockType, ArticleType } from '../consts/consts'

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
