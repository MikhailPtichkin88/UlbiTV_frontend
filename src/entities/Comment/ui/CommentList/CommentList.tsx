import {classNames} from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Comment } from '../../model/types/comment'
import cls from './CommentList.module.scss'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = ({className, comments, isLoading}:CommentProps) => {
  const {t} = useTranslation()
  // eslint-disable-next-line i18next/no-literal-string
  return <div className={classNames(cls.commentList, {}, [className])}>{
    comments?.length
      ? comments.map((comment:Comment)=>(
        <CommentCard key={comment.id}
          isLoading={isLoading}
          className={cls.comment}
          comment={comment}
        />))
      : <Text text={t("Комментарии отсутствуют")}/>}</div>
}
