export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
}

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
}

export interface UserSchema {
  authData?: User
  _inited: boolean
}
