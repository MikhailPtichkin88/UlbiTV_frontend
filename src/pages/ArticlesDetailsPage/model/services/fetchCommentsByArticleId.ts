import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from 'entities/Comment/model/types/comment'

export const fetchCommentsByArticleId = createAsyncThunk<
Comment[],
string | undefined,
ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkApi)=>{
    const {extra, rejectWithValue} = thunkApi
    if(!articleId){
      return rejectWithValue("error")}
    try{
      const res = await extra.api.get<Comment[]>(`/comments`, {
        params: {
          articleId,
          // json.server - так мы получаем дополнительную сущность user (см доку json-server#relationships)
          _expand: 'user'
        }
      })
      if(!res.data){
        throw new Error()
      }
      return res.data

    }catch(e){
      return rejectWithValue("error")
    }
  })