import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from '../../types/profile'
import { validateProfileData } from './validateProfileData'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Armenia,
  first: 'asdf',
  lastname: 'Ulbi',
  city: '113',
  currency: Currency.RUB,
}

describe('validateProfileData.test', () => {
  test('correct data', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })

  test('missing first and last name', async () => {
    const result = validateProfileData({ ...data, lastname: '', first: '' })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('missing age', async () => {
    const result = validateProfileData({ ...data, age: 0 })
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })
})
