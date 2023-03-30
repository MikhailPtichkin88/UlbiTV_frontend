
import { StateSchema } from "app/providers/StoreProvider"
import { ValidateProfileError } from "../types/profile"
import { getProfileValidateError } from "./getProfileValidateError"

describe('getProfileValidateError.test', ()=> {
  test('should return validateErrors', () => {

    const state: DeepPartial<StateSchema> = {
      profile:{
        validateErrors:[ValidateProfileError.INCORRECT_AGE]
      }
    }
    expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE])

  })
  test('should work with empty validateErrors field', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined)
  })
})