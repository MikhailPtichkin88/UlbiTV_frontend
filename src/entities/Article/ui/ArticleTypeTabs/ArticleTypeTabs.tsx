import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleType } from '../../model/types/article'
import { useMemo } from 'react'
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeTab: (tab: TabItem<ArticleType>) => void
}

export const ArticleTypeTabs = ({
  className,
  value,
  onChangeTab,
}: ArticleTypeTabsProps) => {
  const { t } = useTranslation()

  const typeTabs = useMemo(() => {
    const tabs = [] as TabItem<typeof ArticleType[keyof typeof ArticleType]>[]
    Object.values(ArticleType).forEach((type) =>
      tabs.push({ value: type, content: t(type) })
    )
    console.log(tabs)
    return tabs
  }, [t])

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onChangeTab}
    />
  )
}
