import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'

import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '../../../../entities/User'
import { SidebarItemType } from '../types/sidebar'
import {
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'Главная',
    },
  ]
  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData?.id),
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
      }
    )
  }
  return sidebarItemList
})
