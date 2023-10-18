import { buildSlice } from '@/shared/lib/store/buildSlice'
import { CounterSchema } from '../types/counterSchema'

const initialState: CounterSchema = { value: 0 }

const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
  },
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
export const { useActions: useCounterActions } = counterSlice
