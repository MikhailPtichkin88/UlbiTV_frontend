import {
  PayloadAction,
  createEntityAdapter,
  createSlice } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment/model/types/comment'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment:Comment)=> comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state)=> state.articleDetailsComments || commentsAdapter.getInitialState())

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: ["1", "2"],
    entities: {
      //mock data
      "1":  {id: "1",
        text: "comment 1",
        user:{
          id:"1",
          username: "ulbi tv",
          avatar: "https://logowik.com/content/uploads/images/homer-simpson4924.jpg"}
      },
    
      "2":   {
        id: "2",
        text: "comment 2",
        user:{
          id:"1",
          username: "ulbi tv",
          avatar:
"https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/02/17/10/homersimpson1702a.jpg?width=1200"
        }
      }
    },
  }),
  reducers: {},
  extraReducers:(builder)=>{
    builder
      .addCase(fetchCommentsByArticleId.pending, (state)=>{
        state.error=undefined
        state.isLoading=true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action:PayloadAction<Comment[]>)=>{
        state.isLoading=false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action)=>{
        state.error=action.payload
        state.isLoading=false
      })
  }
})

export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice