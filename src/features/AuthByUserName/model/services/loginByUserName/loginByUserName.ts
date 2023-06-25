import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { User, userActions } from '../../../../../entities/User'
interface LoginByUserNameProps {
  username: string
  password: string
}
export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  ThunkConfig<string>
>('login/loginByUserName', async ({ username, password }, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI
  try {
    const res = await extra.api.post<User>('/login', {
      username,
      password,
    })
    if (!res.data) {
      throw new Error()
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data))
    dispatch(userActions.setAuthData(res.data))
    extra.navigate?.('/about')

    return res.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
