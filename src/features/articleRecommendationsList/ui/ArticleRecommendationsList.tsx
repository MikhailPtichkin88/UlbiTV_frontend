import { ArticleList, ArticleListWrap } from '@/entities/Article'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = ({
  className,
}: ArticleRecommendationsListProps) => {
  const { t } = useTranslation()

  const { data: articles, error, isLoading } = useArticleRecommendationsList(3)

  if (isLoading || error || !articles) {
    return null
  }

  return (
    <VStack
      data-testid={'ArticleRecommendationsList'}
      gap="8"
      className={classNames('', {}, [className])}
    >
      <Text size={TextSize.L} title={t('Рекоммендуем')} />
      <ArticleList
        articles={articles}
        isLoading={isLoading}
        wrap={ArticleListWrap.NO_WRAP}
        target="_blank"
      />
    </VStack>
  )
}
