import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit'
import { EnhancedStore } from '@reduxjs/toolkit/dist/configureStore'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { AddCommentFormSchema } from 'features/AddNewComment'
import { LoginSchema } from 'features/AuthByUserName'
import { SaveScrollSchema } from 'features/ScrollSave'
import { ProfileSchema } from 'features/editableProfileCard'
import {
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageSchema,
  ArticleDetailsRecommendationsSchema,
} from 'pages/ArticlesDetailsPage'

import { ArticlesPageSchema } from 'pages/ArticlesPage'
import { rtkApi } from 'shared/api/rtkApi'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  saveScroll: SaveScrollSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean> // {reducerName: isMounted}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
