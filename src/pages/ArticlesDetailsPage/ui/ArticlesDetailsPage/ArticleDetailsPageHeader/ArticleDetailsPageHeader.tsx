import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getArticleDetailsData } from '@/entities/Article'
import { getCanEditArticle } from '@/pages/ArticlesDetailsPage/model/selectors/article'
import { HStack } from '@/shared/ui/Stack'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = ({
  className,
}: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)
  const onBackToList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id))
    }
  }, [article, navigate])

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
      {canEdit && <Button onClick={onEditArticle}>{t('Редактировать')}</Button>}
    </HStack>
  )
}
