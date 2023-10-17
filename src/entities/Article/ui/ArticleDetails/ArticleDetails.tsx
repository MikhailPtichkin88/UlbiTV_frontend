import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import cls from './ArticleDetails.module.scss'
import { useSelector } from 'react-redux'
import { Text, TextAlign, TextSize } from '@/shared/ui/Text'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import { TextTheme } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Avatar } from '@/shared/ui/Avatar'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import { Icon } from '@/shared/ui/Icon'
import { ArticleBlock } from '../../model/types/article'
import { ArticleBlockType } from '../../model/consts/consts'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ArticleDetailsProps {
  className?: string
  id?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
  ({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article')
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const dispatch = useAppDispatch()

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return (
            <ArticleCodeBlockComponent
              key={block.id}
              className={cls.block}
              block={block}
            />
          )
        case ArticleBlockType.IMAGE:
          return (
            <ArticleImageBlockComponent
              key={block.id}
              className={cls.block}
              block={block}
            />
          )
        case ArticleBlockType.TEXT:
          return (
            <ArticleTextBlockComponent
              key={block.id}
              className={cls.block}
              block={block}
            />
          )
        default:
          return null
      }
    }, [])

    useInitialEffect(() => dispatch(fetchArticleById(id)))

    let content
    if (isLoading) {
      content = (
        <div>
          <Skeleton
            className={cls.avatar}
            width={200}
            height={200}
            border={'50%'}
          />
          <Skeleton className={cls.title} width={300} height={32} />
          <Skeleton className={cls.skeleton} width={600} height={24} />
          <Skeleton className={cls.skeleton} width={'100%'} height={200} />
          <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        </div>
      )
    } else if (error) {
      content = (
        <Text
          title={t('Произошла ошибка при загрузке страницы')}
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
        />
      )
    } else {
      content = (
        <>
          <HStack justify="center" max>
            <Avatar src={article?.img} />
          </HStack>
          <Text
            className={cls.title}
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <VStack gap="4">
            <HStack gap="8">
              <Icon Svg={EyeIcon} />
              <Text text={String(article?.views)} />
            </HStack>
            <HStack gap="8">
              <Icon Svg={CalendarIcon} />
              <Text text={String(article?.createdAt)} />
            </HStack>
          </VStack>
          {article?.blocks.map(renderBlock)}
        </>
      )
    }

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <VStack
          gap="16"
          max
          className={classNames(cls.articledetails, {}, [className])}
        >
          {content}
        </VStack>
      </DynamicModuleLoader>
    )
  }
)
