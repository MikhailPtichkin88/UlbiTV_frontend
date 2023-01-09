import { AnyAction, CombinedState, Reducer } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";


export interface StateSchema {
counter: CounterSchema
user: UserSchema,

// Асинхронные редьюсеры
loginForm?: LoginSchema,
}
export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
getReducerMap:()=>void
reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>
add: (key:StateSchemaKey, reducer:Reducer) =>void
remove: (key:StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
reducerManager:ReducerManager
}