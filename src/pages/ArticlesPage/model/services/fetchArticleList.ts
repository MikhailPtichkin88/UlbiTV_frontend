import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { getArticlesPageLimit } from '../selectors/articlesPageSelectors'
import { articlesPageActions } from '../slice/articlesPageSlice'

interface FetchArticleListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi
  const { page = 1 } = props
  const limit = getArticlesPageLimit(getState())
  try {
    const res = await extra.api.get<Article[]>(`/articles`, {
      params: {
        // json.server - так мы получаем дополнительную сущность user (см доку json-server#relationships)
        _expand: 'user',
        _limit: limit,
        _page: page,
      },
    })
    if (!res.data) {
      throw new Error()
    }

    dispatch(articlesPageActions.setPage(page))

    if (Number(res.headers['x-total-count']) < page * limit) {
      dispatch(articlesPageActions.setHasMore(false))
    }

    return res.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
