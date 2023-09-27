import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Overlay.module.scss'
import { ReactNode } from 'react'

interface OverlayProps {
  className?: string
  onClick?: () => void
  children?: ReactNode
}

export const Overlay = ({ className, onClick, children }: OverlayProps) => {
  return (
    <div onClick={onClick} className={classNames(cls.overlay, {}, [className])}>
      {children}
    </div>
  )
}
