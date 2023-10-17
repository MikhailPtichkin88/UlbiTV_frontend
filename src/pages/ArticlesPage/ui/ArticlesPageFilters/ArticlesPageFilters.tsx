import { fetchArticlesList } from '@/pages/ArticlesPage/model/services/fetchArticleList'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { SortOrder } from '@/shared/types'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { TabItem } from '@/shared/ui/Tabs'
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleType,
  ArticleView,
  ArticleViewSelector,
  ArticleTypeTabs,
} from '../../../../entities/Article'
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = ({
  className,
}: ArticlesPageFiltersProps) => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const order = useSelector(getArticlesPageOrder)
  const sort = useSelector(getArticlesPageSort)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )
  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSearch(value))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData]
  )

  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sort))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  const onChangeType = useCallback(
    (tab: TabItem<ArticleType>) => {
      dispatch(articlesPageActions.setType(tab.value))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )

  return (
    <div className={classNames(cls.articlespagefilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('Поиск')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeTab={onChangeType}
        className={cls.tabs}
      />
    </div>
  )
}
