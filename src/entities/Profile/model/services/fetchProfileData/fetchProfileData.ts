import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI
  try {
    const res = await extra.api.get<Profile>(`/profile/${profileId}`)
    if (!res.data) {
      throw new Error()
    }
    return res.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
