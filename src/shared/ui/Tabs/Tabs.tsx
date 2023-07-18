import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { useTranslation } from 'react-i18next'
import { ReactNode, useCallback } from 'react'
import { Card, CardTheme } from '../Card/Card'

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (value: TabItem) => void
}

export const Tabs = ({ className, tabs, value, onTabClick }: TabsProps) => {
  const { t } = useTranslation()

  const onClickHandler = useCallback(
    (tab: TabItem) => () => onTabClick(tab),
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
