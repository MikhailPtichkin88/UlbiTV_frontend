import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div {...props} className={classNames(cls.card, {}, [className])}>
      {children}
    </div>
  )
}
