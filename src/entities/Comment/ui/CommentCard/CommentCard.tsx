import {classNames} from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentProps {
     className?: string
      comment: Comment
isLoading?: boolean
}

export const CommentCard = ({className, comment, isLoading}:CommentProps) => {

  if(isLoading){
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={"50%"}/>
          <Skeleton className={cls.username} width={100} height={16}/>
        </div>
        <Skeleton className={cls.text} width={"100%"} height={50}/>
      </div>
    )}

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>

      <div className={cls.header}>
        { comment.user.avatar && <Avatar size={40} src={comment.user.avatar}/> }
        <Text className={cls.username} title={comment.user.username} />
      </div>
      <Text className={cls.text} text={comment.text} />

    </div>)
}
