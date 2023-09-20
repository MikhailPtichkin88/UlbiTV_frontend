import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Dropdown.module.scss'
import { Menu } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { generateUniqueId } from 'shared/lib/generateUniqueId/generateUniqueId'
import { DropdownDirection } from '../../../../types'
import { AppLink } from '../../../AppLink/AppLink'
import { mapDirectionsClass } from '../consts'
import popupCls from '../Popup.module.scss'

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
  return (
    <Menu as={'div'} className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
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
