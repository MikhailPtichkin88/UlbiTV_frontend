import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User'
import { useDispatch, useSelector } from 'react-redux'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation('translation')

  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvaliable = isAdmin || isManager
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(userActions.logout())
  }

  if (!authData) return null

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvaliable
          ? [
              {
                content: t('админ_панель'),
                href: RoutePath.admin_panel,
              },
            ]
          : []),
        {
          content: t('PROFILE_PAGE'),
          href: RoutePath.profile + authData.id,
        },
        { content: t('Выйти'), onClick: onLogout },
      ]}
      trigger={<Avatar size={40} src={authData.avatar} />}
    />
  )
}
