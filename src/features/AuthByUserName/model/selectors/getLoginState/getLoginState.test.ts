import { DeepPartial } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { getLoginState } from "./getLoginState"

describe('getLoginState.test', ()=> {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm:{
        username:"Oleg",
        password:"123",
        isLoading:true,
        error:"error"
      }
    }
    expect(getLoginState(state as StateSchema)).toEqual({
      username:"Oleg",
      password:"123",
      isLoading:true,
      error:"error"
    })
    expect(getLoginState(state as StateSchema).username).toEqual("Oleg")
    expect(getLoginState(state as StateSchema).password).toEqual("123")
    expect(getLoginState(state as StateSchema).isLoading).toEqual(true)
    expect(getLoginState(state as StateSchema).error).toEqual("error")
  })
  test('should work with empty state', () => {

    const state: DeepPartial<StateSchema> = {}

    expect(getLoginState(state as StateSchema)).toEqual({username:"",password:"",isLoading:false})
  })
})