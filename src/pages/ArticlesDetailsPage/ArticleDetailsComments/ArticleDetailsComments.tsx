import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { CommentList } from 'entities/Comment'
import { AddCommentForm } from 'features/AddNewComment'
import { TextSize, Text } from 'shared/ui/Text/Text'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'
import { getArticleComments } from '../model/slices/ArticleDetailsCommentsSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId'
import { VStack } from 'shared/ui/Stack'

interface ArticleDetailsCommentsProps {
  className?: string
  id: string
}

export const ArticleDetailsComments = ({
  className,
  id,
}: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Комментарии')} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </VStack>
  )
}
