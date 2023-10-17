import { Article, ArticleListWrap, ArticleView } from '@/entities/Article'
import { ArticleListItem } from '@/entities/Article/ui/ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text'
import { t } from 'i18next'
import { HTMLAttributeAnchorTarget } from 'react'
import { useSelector } from 'react-redux'
import { Virtuoso } from 'react-virtuoso'
import { getArticles } from '../../model/slice/articlesPageSlice'
import cls from './ArticleVirtualList.module.scss'
import { getArticlesPageHasMore } from '../../model/selectors/articlesPageSelectors'

interface ArticleVirtualListProps {
  articles: Article[]
  className?: string
  target?: HTMLAttributeAnchorTarget
  wrap?: ArticleListWrap
  loadNextPage?: () => void
  isLoading?: boolean
  view?: ArticleView
  error?: string
}

export const ArticleVirtualList = ({
  articles,
  className,
  target,
  wrap = ArticleListWrap.WRAP,
  view = ArticleView.SMALL,
  error,
  isLoading,
  loadNextPage,
}: ArticleVirtualListProps) => {
  const hasMore = useSelector(getArticlesPageHasMore)
  const isBig = view === ArticleView.BIG
  const itemsPerRow = isBig ? 1 : 4
  // const rowCount = isBig
  //   ? articles?.length
  //   : Math.ceil(articles?.length / itemsPerRow)

  const itemRenderer = (index: number) => {
    const items = []
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          className={cls.card}
          target={target}
          key={articles[i].id}
        />
      )
    }
    return (
      <div key={index} className={cls.row}>
        {items}
      </div>
    )
  }

  const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 4 : 2)
      .fill(0)
      .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />)
  }

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

  return (
    <div className={cls.wrapper}>
      <Virtuoso
        endReached={loadNextPage}
        className={classNames(cls.virtualList, { [cls[wrap]]: true }, [
          className,
          cls[view],
        ])}
        totalCount={Math.ceil(articles?.length / itemsPerRow)}
        itemContent={itemRenderer}
        components={{
          Footer: () => {
            if (!hasMore && !isLoading) {
              return null
            }
            return <div className={cls.row}>{getSkeletons(view)}</div>
          },
        }}
      />
    </div>
  )
}
