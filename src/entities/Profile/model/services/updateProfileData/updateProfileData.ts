import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm'
import { Profile, ValidateProfileError } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI
  try {
    const formData = getProfileForm(getState())
    const errors = validateProfileData(formData)
    if (errors.length) {
      return rejectWithValue(errors)
    }
    const res = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData
    )
    if (!res.data) {
      throw new Error()
    }
    return res.data
  } catch (e) {
    console.log(e)
    return rejectWithValue([ValidateProfileError.SERVER_ERROR])
  }
})
