
import { StateSchema } from "app/providers/StoreProvider"
import { getProfileIsLoading } from "./getProfileIsLoading"

describe('getProfileIsLoading.test', ()=> {
  test('should return isLoading', () => {

    const state: DeepPartial<StateSchema> = {
      profile:{
        isLoading:true
      }
    }
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true)

  })
  test('should work with empty isLoading field', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
  })
})