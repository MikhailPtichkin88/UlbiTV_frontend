// import { createSelector } from '@reduxjs/toolkit'
// import { CounterSchema } from '../../types/counterSchema'
// import { getCounter } from '../getCounter/getCounter'

import { StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/lib/store'

// export const getCounterValue = createSelector(
//   getCounter,
//   (counter: CounterSchema) => counter.value
// )

export const [useCounterValue, getCounterValue] = buildSelector(
  (state: StateSchema) => state.counter.value
)
