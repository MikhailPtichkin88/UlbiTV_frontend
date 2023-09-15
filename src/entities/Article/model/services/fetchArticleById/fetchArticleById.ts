import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchProfileData', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI
  try {
    // кейс для сторибука, когда не передаем id и санка нам не нужна
    if (!articleId) {
      throw new Error('storybook case')
    }
    const res = await extra.api.get<Article>(`/articles/${articleId}`, {
      params: { _expand: 'user' },
    })
    if (!res.data) {
      throw new Error()
    }
    return res.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
