import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from '../../../Country'
import { Currency } from '../../../Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      lastname: 'Ulbi',
      city: '113',
      currency: Currency.RUB,
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
    expect(getProfileData(state as StateSchema)?.username).toEqual('admin')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
