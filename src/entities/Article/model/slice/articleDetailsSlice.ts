import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { Article } from '../types/article'

const initialState:ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data:undefined,
}

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    // setReadonly:(state, action:PayloadAction<boolean>)=>{
    //   state.readonly = action.payload
    // },

  },
  extraReducers:(builder)=>{
    builder
      .addCase(fetchArticleById.pending, (state)=>{
        state.error=undefined
        state.isLoading=true
      })
      .addCase(fetchArticleById.fulfilled, (state, action:PayloadAction<Article>)=>{
        state.isLoading=false
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action)=>{
        state.error=action.payload
        state.isLoading=false
      })
  }
})
export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice

