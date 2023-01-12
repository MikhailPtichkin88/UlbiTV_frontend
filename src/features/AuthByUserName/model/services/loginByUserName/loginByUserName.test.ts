
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios from "axios";
import { userActions } from "entities/User";
import { loginByUserName } from "./loginByUserName";

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('loginByUserName.test', () => { 
  let dispatch: Dispatch
  let getState: ()=> StateSchema

  beforeEach(()=>{
    dispatch = jest.fn()
    getState = jest.fn()
  })
  test("loginByUsername.test", async()=>{
    const userValue = {username:"123", id:"1"}
    mockedAxios.post.mockReturnValue(Promise.resolve({data:userValue}))
    const action = loginByUserName({username:"123", password:"123"})
    const result = await action(dispatch, getState, undefined)

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
  })
})