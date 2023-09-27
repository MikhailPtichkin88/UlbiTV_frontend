import { ArticleList } from '@/entities/Article'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { getArticles } from '@/pages/ArticlesPage/model/slice/articlesPageSlice'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Text, TextTheme } from '@/shared/ui/Text/Text'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = ({
  className,
}: ArticleInfiniteListProps) => {
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  const { t } = useTranslation()

  if (error) {
    return <Text theme={TextTheme.ERROR} text={t('Ошибка подгрузки данных')} />
  }

  return (
    <ArticleList
      articles={articles}
      isLoading={isLoading}
      view={view}
      className={className}
    />
  )
}
