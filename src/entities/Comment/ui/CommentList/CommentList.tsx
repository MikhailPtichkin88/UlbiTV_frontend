import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Comment } from '../../model/types/comment'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from '@/shared/ui/Stack'

interface CommentProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = ({
  className,
  comments,
  isLoading,
}: CommentProps) => {
  const { t } = useTranslation()
  // eslint-disable-next-line i18next/no-literal-string

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
        <CommentCard isLoading={true} />
      </VStack>
    )
  }
  return (
    <VStack
      data-testid={'CommentCard.Content'}
      gap="16"
      max
      className={classNames('', {}, [className])}
    >
      {comments?.length ? (
        comments.map((comment: Comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </VStack>
  )
}
