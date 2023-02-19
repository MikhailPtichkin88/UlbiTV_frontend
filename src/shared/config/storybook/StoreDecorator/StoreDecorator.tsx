import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "../../../../entities/Profile/index";
import { loginReducer } from "features/AuthByUserName";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList={
  loginForm:loginReducer,
  profile:profileReducer,
}

export const StoreDecorator=(
  state:DeepPartial<StateSchema>,
  asyncReducers?:ReducersList) => (StoryComponent: Story) => {
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
    >
      <StoryComponent/>
    </StoreProvider>
  )
};