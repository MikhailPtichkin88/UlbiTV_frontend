import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Article } from "../../types/article"

export const fetchArticleById =
createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchProfileData',
  async(articleId, thunkAPI)=>{
    const {extra, rejectWithValue} = thunkAPI
    try{
      const res = await extra.api.get<Article>(`/articles/${articleId}`)
      if(!res.data){
        throw new Error()
      }
      return res.data

    }catch(e){
      console.log(e);
      return rejectWithValue("error")
    
    }
  })