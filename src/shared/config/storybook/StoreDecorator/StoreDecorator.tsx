import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { profileReducer } from "../../../../entities/Profile/index";
import { loginReducer } from "features/AuthByUserName";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../../../entities/Article/model/slice/articleDetailsSlice";

const defaultAsyncReducers: ReducersList={
  loginForm:loginReducer,
  profile:profileReducer,
  articleDetails: articleDetailsReducer
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