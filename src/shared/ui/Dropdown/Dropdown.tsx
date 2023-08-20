import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Dropdown.module.scss'
import { useTranslation } from 'react-i18next'
import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { generateUniqueId } from 'shared/lib/generateUniqueId/generateUniqueId'
import { DropdownDirection } from 'app/types/ui'
import { AppLink } from '../AppLink/AppLink'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger?: ReactNode
  direction?: DropdownDirection
}

export const Dropdown = ({
  className,
  trigger,
  items,
  direction = 'bottom right',
}: DropdownProps) => {
  const { t } = useTranslation()
  const mapDirectionsClass: Record<DropdownDirection, string> = {
    'bottom left': cls.bottomLeft,
    'bottom right': cls.bottomRight,
    'top left': cls.topLeft,
    'top right': cls.topRight,
  }
  return (
    <Menu as={'div'} className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items
        className={classNames(cls.menu, {}, [mapDirectionsClass[direction]])}
      >
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type={'button'}
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(cls.item, { [cls.active]: active }, [])}
            >
              {item.content}
            </button>
          )
          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                key={generateUniqueId()}
                disabled={item.disabled}
              >
                {({ active }) => content({ active })}
              </Menu.Item>
            )
          }
          return (
            <Menu.Item
              as={Fragment}
              key={generateUniqueId()}
              disabled={item.disabled}
            >
              {({ active }) => content({ active })}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
