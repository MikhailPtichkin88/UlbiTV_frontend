import { StateSchema } from 'app/providers/StoreProvider'

export const getLoginState = (state: StateSchema) =>
  state?.loginForm ?? { username: '', password: '', isLoading: false }
