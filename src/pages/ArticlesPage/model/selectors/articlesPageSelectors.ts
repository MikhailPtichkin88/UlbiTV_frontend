import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from '../../../../entities/Article/model/types/article'

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false
export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || ArticleView.SMALL
