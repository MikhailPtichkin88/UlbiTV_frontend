import { HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/Text'
import { ArticleView } from '../../model/consts/consts'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'
interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  error?: string
  wrap?: ArticleListWrap
  target?: HTMLAttributeAnchorTarget
}

export enum ArticleListWrap {
  WRAP = 'wrap',
  NO_WRAP = 'no_wrap',
}

export const ArticleList = ({
  className,
  articles,
  isLoading,
  view = ArticleView.SMALL,
  error,
  wrap = ArticleListWrap.WRAP,
  target,
}: ArticleListProps) => {
  const { t } = useTranslation('article')

  if (error) {
    return (
      <Text
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
        size={TextSize.L}
        title={t('Ошибка загрузки статей')}
      />
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }
  const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 2)
      .fill(0)
      .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />)
  }

  return (
    <div
      className={classNames('', { [cls[wrap]]: true }, [className, cls[view]])}
    >
      {articles.map((article) => (
        <ArticleListItem
          article={article}
          view={view}
          className={cls.card}
          target={target}
          key={article.id}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  )
}
