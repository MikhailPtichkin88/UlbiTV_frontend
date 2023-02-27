import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

import { Profile, ProfileSchema } from '../types/profile'

const initialState:ProfileSchema = {
  readonly:true,
  isLoading: false,
  error: undefined,
  data:undefined,
  form:undefined,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly:(state, action:PayloadAction<boolean>)=>{
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
    },
    updateProfile:(state, action:PayloadAction<Profile>)=>{
      state.form = {
        ...state.form,
        ...action.payload
      }
    }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(fetchProfileData.pending, (state, action)=>{
        state.error=undefined
        state.isLoading=true
      })
      .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>)=>{
        state.isLoading=false
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action)=>{
        state.error=action.payload
        state.isLoading=false
      })
  }
})
export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

