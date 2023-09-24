import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from 'shared/lib/hooks/useModal/useModal'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: DrawerProps) => {
  const { theme } = useTheme()

  const { close, isMounted, isClosing } = useModal({
    animationDelay: 300,
    isOpen,
    onClose,
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
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
        <Overlay onClick={close}>
          <div className={cls.content}>{children}</div>
        </Overlay>
      </div>
    </Portal>
  )
}
