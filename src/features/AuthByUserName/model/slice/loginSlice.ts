import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByUserName } from '../services/loginByUserName/loginByUserName'
import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema'

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
  },
})
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
