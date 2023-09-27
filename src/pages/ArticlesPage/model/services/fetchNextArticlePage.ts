import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
} from '../selectors/articlesPageSelectors'
import { fetchArticlesList } from './fetchArticleList'
import { articlesPageActions } from '../slice/articlesPageSlice'

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const isLoading = getArticlesPageIsLoading(getState())
  const page = getArticlesPageNum(getState())
  if (page === 1) {
    dispatch(articlesPageActions.setHasMore(true))
  }
  const hasMore = getArticlesPageHasMore(getState())

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1))
    dispatch(fetchArticlesList({}))
  }
})
