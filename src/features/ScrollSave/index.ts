export type {
  ScrollSchema,
  SaveScrollSchema,
} from './model/types/saveScrollSchema'
export { getScrollByPath } from './model/selectors/getScrollSave'
export {
  saveScrollReducer,
  saveScrollActions,
} from './model/slices/saveScrollSlice'
