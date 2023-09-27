import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { ReactNode, useCallback } from 'react'
import { Card, CardTheme } from '../Card/Card'

export interface TabItem<T extends string> {
  value: T
  content: ReactNode
}

interface TabsProps<T extends string> {
  className?: string
  tabs: TabItem<T>[]
  value: T
  onTabClick: (value: TabItem<T>) => void
}

export const Tabs = <T extends string>({
  className,
  tabs,
  value,
  onTabClick,
}: TabsProps<T>) => {
  const onClickHandler = useCallback(
    (tab: TabItem<T>) => () => onTabClick(tab),
    [onTabClick]
  )

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          onClick={onClickHandler(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
}
