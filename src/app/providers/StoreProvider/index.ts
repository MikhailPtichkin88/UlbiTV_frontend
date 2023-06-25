import type {
  StateSchema,
  ThunkConfig,
  ThunkExtraArg,
} from './config/StateSchema'
import { AppDispatch, createReduxStore } from './config/store'
import { StoreProvider } from './ui/StoreProvider'

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  AppDispatch,
  ThunkExtraArg,
  ThunkConfig,
}
