import { lazy } from 'react'

export const ProfilePageAsync = lazy(
  () =>
    new Promise((res) => {
      //@ts-ignore
      setTimeout(() => res(import('./ProfilePage')), 3000)
    })
)
