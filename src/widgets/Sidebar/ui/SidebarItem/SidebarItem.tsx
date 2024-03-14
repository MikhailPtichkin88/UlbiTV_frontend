import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { SidebarItemType } from '../../model/items'
import cls from './SidebarItem.module.scss'
import { getUserAuthData } from '@/entities/User'

interface SidebarItemProps {
  item?: SidebarItemType
  collapsed?: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(
  ({ item = {} as SidebarItemType, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
      return null
    }

    return (
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item?.path || '/'}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}> {t(`${item?.text}`)} </span>
      </AppLink>
    )
  }
)
