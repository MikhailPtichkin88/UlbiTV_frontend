export { userReducer, userActions } from './model/slice/userSlice'
export type { UserSchema, User } from './model/types/user'
export { UserRole } from './model/consts/consts'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserInited } from './model/selectors/gerUserInited/getUserInited'
export {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from './model/selectors/getUserRoles/getUserRoles'
