import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '../../../entities/User'
import { LoginModal } from 'features/AuthByUserName'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('translation')
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])
  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
  const onLogout = () => {
    dispatch(userActions.logout())
  }

  const isAdminPanelAvaliable = isAdmin || isManager

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('UlbiTV App')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Создание статьи')}
        </AppLink>
        <Dropdown
          className={cls.dropdown}
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
        {/* <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onLogout}
          className={cls.links}
        >
          {t('Выйти')}
        </Button> */}
      </header>
    )
  }
  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onShowModal}
        className={cls.links}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  )
})
