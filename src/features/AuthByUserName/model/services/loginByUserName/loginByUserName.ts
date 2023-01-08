import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "../../../../../entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
interface LoginByUserNameProps {
  username:string,
  password:string
}
export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, {rejectValue:string}>(
  'login/loginByUserName', 
  async({username, password}, thunkAPI)=>{
 
    try{
      const res = await axios.post<User>('http://localhost:8000/login', {
        username,
        password
      })
      if(!res.data){
        throw new Error()
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data))
      thunkAPI.dispatch(userActions.setAuthData(res.data))

      return res.data 
    }catch(e){
      console.log(e);
      return thunkAPI.rejectWithValue("error")
    
    }
  })
  