import { Article } from './../../../../../entities/Article/model/types/article'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articlesDetailsPage/fetchArticleRecommendations',
  async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const res = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _limit: 4,
        },
      })
      if (!res.data) {
        throw new Error()
      }

      return res.data
    } catch (e) {
      return rejectWithValue('error')
    }
  }
)
