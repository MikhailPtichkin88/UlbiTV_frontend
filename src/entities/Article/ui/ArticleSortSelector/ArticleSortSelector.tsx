import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { Select, SelectOptions } from '@/shared/ui/Select'
import { useMemo } from 'react'
import { ArticleSortField } from '../../model/consts/consts'
import { SortOrder } from '@/shared/types'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = ({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort,
}: ArticleSortSelectorProps) => {
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      { value: 'asc', content: t('возрастанию') },
      { value: 'desc', content: t('убыванию') },
    ],
    [t]
  )

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: t('Дате создания') },
      { value: ArticleSortField.TITLE, content: t('Названию') },
      { value: ArticleSortField.VIEWS, content: t('Количеству просмотров') },
    ],
    [t]
  )
  return (
    <div className={classNames(cls.articlesortselector, {}, [className])}>
      <Select<ArticleSortField>
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
        label={t('Сортировать ПО')}
      />

      <Select<SortOrder>
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
        label={t('по')}
      />
    </div>
  )
}
