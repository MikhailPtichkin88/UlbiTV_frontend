import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  try {
    const res = await extra.api.get<Article[]>(`/articles`, {
      params: {
        // json.server - так мы получаем дополнительную сущность user (см доку json-server#relationships)
        _expand: 'user',
      },
    })
    if (!res.data) {
      throw new Error()
    }
    return res.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
