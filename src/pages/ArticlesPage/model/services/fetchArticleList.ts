import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article, ArticleType } from '../../../../entities/Article'
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../selectors/articlesPageSelectors'
import { articlesPageActions } from '../slice/articlesPageSlice'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticleListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi
  const page = getArticlesPageNum(getState())
  const limit = getArticlesPageLimit(getState())
  const sort = getArticlesPageSort(getState())
  const order = getArticlesPageOrder(getState())
  const search = getArticlesPageSearch(getState())
  const type = getArticlesPageType(getState())

  try {
    addQueryParams({ sort, order, search, type })
    const res = await extra.api.get<Article[]>(`/articles`, {
      params: {
        // json.server - так мы получаем дополнительную сущность user (см доку json-server#relationships)
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
      },
    })
    if (!res.data) {
      throw new Error()
    }

    if (Number(res.headers['x-total-count']) < page * limit) {
      dispatch(articlesPageActions.setHasMore(false))
    }

    return res.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
