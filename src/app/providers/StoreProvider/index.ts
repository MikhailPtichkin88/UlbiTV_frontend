import type {
  StateSchema,
  ThunkConfig,
  ThunkExtraArg,
} from './config/StateSchema'
import { createReduxStore } from './config/store'
import { StoreProvider } from './ui/StoreProvider'
import type { AppDispatch } from './config/store'

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ThunkExtraArg,
  ThunkConfig,
}
export type { AppDispatch }
