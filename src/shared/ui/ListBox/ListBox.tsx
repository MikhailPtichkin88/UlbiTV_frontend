import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ListBox.module.scss'
import { Listbox as HlistBox } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { Button } from '../Button/Button'
import { HStack } from '../Stack'

type DropdownDirection = 'top' | 'bottom'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  items: ListBoxItem[]
  value?: string
  defaultValue?: string
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
  onChange: <T extends string>(value: T) => void
}

export const ListBox = ({
  className,
  items,
  value,
  defaultValue,
  readonly,
  direction = 'bottom',
  label,
  onChange,
}: ListBoxProps) => {
  return (
    <HStack gap={'8'}>
      {label && <span className={cls.label}>{`${label} ►`}</span>}
      <HlistBox
        disabled={readonly}
        as={'div'}
        className={classNames(cls.listbox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HlistBox.Button as={Fragment}>
          <Button className={cls.trigger} disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HlistBox.Button>
        <HlistBox.Options
          className={classNames(cls.options, {}, [cls[direction]])}
        >
          {items?.map((item) => (
            <HlistBox.Option
              key={item.value}
              as={Fragment}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [cls.active]: active,
                    [cls.selected]: selected,
                    [cls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </HlistBox.Option>
          ))}
        </HlistBox.Options>
      </HlistBox>
    </HStack>
  )
}
