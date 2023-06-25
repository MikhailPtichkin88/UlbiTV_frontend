import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from '../../../../../entities/Article'
import { getUserAuthData } from '../../../../../entities/User'
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
  const { extra, dispatch, getState, rejectWithValue } = thunkAPI
  try {
    const userData = getUserAuthData(getState())
    const articleId = getArticleDetailsData(getState())?.id

    if (!userData || !text || !articleId) {
      return rejectWithValue('no data')
    }
    const res = await extra.api.post<Comment>('/comments', {
      articleId,
      userId: userData.id,
      text,
    })
    if (!res.data) {
      throw new Error()
    }
    dispatch(fetchCommentsByArticleId(articleId))
    return res.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
