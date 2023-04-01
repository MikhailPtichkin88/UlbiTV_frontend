
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileSchema, ValidateProfileError } from "../types/profile"
import { profileActions, profileReducer } from "./profileSlice"
import { updateProfileData } from "entities/Profile";
const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'ulbi tv',
  first: 'asd',
  city: 'asf',
  currency: Currency.USD,
};
describe("profileSlice.test", ()=> {
  test("test set readonly", ()=>{
        
    const state: DeepPartial<ProfileSchema> = {readonly: false}
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true),
    )).toEqual({ readonly: true })
  })

  test("test cancel edit", ()=>{
        
    const state: DeepPartial<ProfileSchema> = {data, form:{username:""}}
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit(),
    )).toEqual({ readonly: true, validateErrors: undefined, form: data, data })
  })
  test("test udate data", ()=>{
        
    const state: DeepPartial<ProfileSchema> = { form:{username:"123"}}
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({username:"12345"}),
    )).toEqual({ form: { username:"12345"} })
  })

  test("test udate profile data success", ()=>{
        
    const state: DeepPartial<ProfileSchema> = { isLoading:true}
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data
    })
  })

  test("test udate profile data pending", ()=>{
        
    const state: DeepPartial<ProfileSchema> = { isLoading:false, validateErrors:[ValidateProfileError.INCORRECT_COUNTRY] }
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateError: undefined,
    })
  })
})