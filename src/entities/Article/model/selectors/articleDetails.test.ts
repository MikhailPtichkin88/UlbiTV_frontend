import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from './articleDetails'
import { getArticleDetailsIsLoading } from './articleDetails'
import { getArticleDetailsError } from './articleDetails'

describe('getArticleDetailsData', () => {
  test('should return data value', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })
  test('should return empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should return empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })
})
