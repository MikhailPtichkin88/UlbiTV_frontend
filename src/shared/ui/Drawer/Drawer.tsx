import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { useTranslation } from 'react-i18next'
import { ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = ({
  className,
  children,
  isOpen,
  onClose,
}: DrawerProps) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const mods = {
    [cls.opened]: isOpen,
  }

  return (
    <Portal>
      <div
        className={classNames(cls.drawer, mods, [
          className,
          theme,
          'app_drawer',
        ])}
      >
        <Overlay onClick={onClose}>
          <div className={cls.content}>{children}</div>
        </Overlay>
      </div>
    </Portal>
  )
}
