import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailsPageSchema } from '../types'
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice'
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice'

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  })
