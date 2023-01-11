import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUserName";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>>={
  loginForm:loginReducer,
}

export const StoreDecorator=(state:DeepPartial<StateSchema>,
  asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>) => (StoryComponent: Story) => {
  return (
    <StoreProvider 
      initialState={state}
      asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
    >
      <StoryComponent/>
    </StoreProvider>
  )
};