import { HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { List, ListRowProps, WindowScroller } from 'react-virtualized'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign, TextSize, TextTheme } from '@/shared/ui/Text/Text'
import { PAGE_ID } from '@/widgets/Page/Page'
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
  virtualized?: boolean
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
  virtualized = true,
}: ArticleListProps) => {
  const { t } = useTranslation('article')

  const isBig = view === ArticleView.BIG
  const itemsPerRow = isBig ? 1 : 4
  const rowCount = isBig
    ? articles?.length
    : Math.ceil(articles?.length / itemsPerRow)

  const rowRenderer = ({ key, index, style }: ListRowProps) => {
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
      <div key={key} style={style} className={cls.row}>
        {items}
      </div>
    )
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
      <div className={classNames(cls.articlelist, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }
  const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
      .fill(0)
      .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />)
  }

  return (
    <WindowScroller
      onScroll={() => console.log('scroll')}
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        width,
        height,
        registerChild,
        scrollTop,
        isScrolling,
        onChildScroll,
      }) => (
        <div
          // @ts-ignore
          ref={registerChild}
          className={classNames(cls.articlelist, { [cls[wrap]]: true }, [
            className,
            cls[view],
          ])}
        >
          {virtualized ? (
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRenderer}
              width={width ? width - 80 : 700}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((article) => (
              <ArticleListItem
                article={article}
                view={view}
                className={cls.card}
                target={target}
                key={article.id}
              />
            ))
          )}
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  )
}
