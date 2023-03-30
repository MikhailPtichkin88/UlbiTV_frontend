
import { StateSchema } from "app/providers/StoreProvider"
import { Country } from "../../../Country"
import { Currency } from "../../../Currency"
import { getProfileForm } from "./getProfileForm"

describe('getProfileForm.test', ()=> {
  test('should return profile form data', () => {
    const form = {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      lastname:"Ulbi",
      city: '113',
      currency: Currency.RUB,
    }
    const state: DeepPartial<StateSchema> = {
      profile:{
        form
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form)
    expect(getProfileForm(state as StateSchema)?.username).toEqual("admin")
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
 
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
 
  })
})