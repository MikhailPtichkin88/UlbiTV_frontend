import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { DropdownDirection } from '@/shared/types'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'

interface AvatarDropdownProps {
  className?: string
  dropdownDirection?: DropdownDirection
}

export const AvatarDropdown = ({
  className,
  dropdownDirection = 'bottom left',
}: AvatarDropdownProps) => {
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
      direction={dropdownDirection}
      items={[
        ...(isAdminPanelAvaliable
          ? [
              {
                content: t('админ_панель'),
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t('PROFILE_PAGE'),
          href: getRouteProfile(authData.id),
        },
        { content: t('Выйти'), onClick: onLogout },
      ]}
      trigger={<Avatar fallbackInverted size={40} src={authData.avatar} />}
    />
  )
}
