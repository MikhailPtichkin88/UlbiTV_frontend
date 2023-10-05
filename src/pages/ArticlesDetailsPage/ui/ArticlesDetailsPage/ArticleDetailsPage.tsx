import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Page } from '@/widgets/Page/Page'
import { ArticleDetails } from '../../../../entities/Article'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId'
import { articleDetailsPageReducer } from '../../model/slices'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleDetailsComments } from '@/pages/ArticlesDetailsPage/ArticleDetailsComments/ArticleDetailsComments'
import { ArticleRating } from '@/features/ArticleRating'

interface ArticlesDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(cls.articledetailspage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    )
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articledetailspage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} className={cls.mb_30} />
        <ArticleRating articleId={id} className={cls.mb_30} />
        <ArticleRecommendationsList className={cls.mb_30} />
        <ArticleDetailsComments id={id} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
