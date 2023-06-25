import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entities/Article'
import { getUserAuthData } from 'entities/User'
import { getAddCommentFormText } from '../../selectors/addCommentFormSelector'
import { addComentFormActions } from '../../slices/addCommentFormSlice'

export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
  'addCommentForm/sendComment',
  async (_, thunkAPI) => {
    const { extra, dispatch, getState, rejectWithValue } = thunkAPI
    try {
      const userData = getUserAuthData(getState())
      const text = getAddCommentFormText(getState())
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
      dispatch(addComentFormActions.setText(''))
      return res.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
