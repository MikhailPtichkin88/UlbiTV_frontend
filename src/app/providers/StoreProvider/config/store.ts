import { configureStore, DeepPartial, getDefaultMiddleware, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { NavigateOptions, To, useNavigate } from "react-router-dom";

export function createReduxStore(
  initialState?:StateSchema,
  asyncReducers?:ReducersMapObject,
  navigate?:(to:To, options?:NavigateOptions)=> void
) {

  const rootReducers: ReducersMapObject<StateSchema>={
    ...asyncReducers,
    counter: counterReducer,
    user:   userReducer,
  }

  const reducerManager = createReducerManager(rootReducers)


  const store= configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState:initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk:{
        extraArgument:{
          api: $api,
          navigate
        }
      }
    })
  });

  //@ts-ignore
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
export default createReduxStore