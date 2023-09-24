import { useTheme } from 'app/providers/ThemeProvider'
import { ReactNode } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
import { Portal } from 'shared/ui/Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  lazy,
}: ModalProps) => {
  const { theme } = useTheme()

  const { close, isMounted, isClosing } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
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
        className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}
      >
        <Overlay onClick={close}>
          <div onClick={(e) => e.stopPropagation()} className={cls.content}>
            {children}
          </div>
        </Overlay>
      </div>
    </Portal>
  )
}
