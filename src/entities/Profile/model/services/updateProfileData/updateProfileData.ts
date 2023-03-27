import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { getProfileForm } from "../../selectors/getProfileForm"
import { Profile } from "../../types/profile"

export const updateProfileData =
createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async(_, thunkAPI)=>{
    const {extra, rejectWithValue, getState} = thunkAPI
    try{
      const formData = getProfileForm(getState())
      const res = await extra.api.put<Profile>('/profile', formData)
      if(!res.data){
        throw new Error()
      }
      return res.data

    }catch(e){
      console.log(e);
      return rejectWithValue("error")
    
    }
  })