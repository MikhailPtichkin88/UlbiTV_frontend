import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Popup.module.scss'
import { useTranslation } from 'react-i18next'
import { Popover } from '@headlessui/react'
import { ReactNode } from 'react'
import { DropdownDirection } from '../../../types'
import { mapDirectionsClass } from './consts'

interface PopupProps {
  className?: string
  trigger?: ReactNode
  direction?: DropdownDirection
  children: ReactNode
}

export const Popup = ({
  className,
  trigger,
  direction = 'bottom left',
  children,
}: PopupProps) => {
  const { t } = useTranslation()

  return (
    <Popover className={classNames(cls.popup, {}, [className])}>
      <Popover.Button as={'div'} className={cls.trigger}>
        {trigger}
      </Popover.Button>

      <Popover.Panel
        className={classNames(cls.panel, {}, [mapDirectionsClass[direction]])}
      >
        {children}
      </Popover.Panel>
    </Popover>
  )
}
