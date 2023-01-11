import { configureStore, DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(
  initialState?:StateSchema,
  asyncReducers?:ReducersMapObject) {

  const rootReducers: ReducersMapObject<StateSchema>={
    ...asyncReducers,
    counter: counterReducer,
    user:   userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store= configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState:initialState
  });

  //@ts-ignore
  store.reducerManager = reducerManager
  return store
}

export default createReduxStore