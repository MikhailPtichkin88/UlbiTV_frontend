import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { loginReducer } from '@/features/AuthByUserName'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../../../entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from '@/features/AddNewComment/model/slices/addCommentFormSlice'
import { articleDetailsPageReducer } from '@/pages/ArticlesDetailsPage/model/slices'
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice'
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slice/articlesPageSlice'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
  articlesPage: articlesPageReducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }
