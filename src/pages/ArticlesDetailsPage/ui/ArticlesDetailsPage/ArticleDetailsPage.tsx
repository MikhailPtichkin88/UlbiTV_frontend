import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from '../../../../entities/Article'
import { useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { Text } from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList }
  from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments }
  from '../../model/slices/ArticleDetailsCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsError, getArticleCommentsIsLoading }
  from '../../model/selectors/comments'
import { fetchCommentsByArticleId } from 'pages/ArticlesDetailsPage/model/services/fetchCommentsByArticleId'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ArticlesDetailsPageProps {
     className?: string
}

const reducers:ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer}

const ArticleDetailsPage = ({className, }:ArticlesDetailsPageProps) => {
  const {t} = useTranslation("article");
  const { id } = useParams<{id:string}>()
  const dispatch = useDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const commentsError = useSelector(getArticleCommentsError)

  useInitialEffect(()=> dispatch(fetchCommentsByArticleId(id)))

  if(!id){
    return (
      <div className={classNames(cls.articledetailspage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    )
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articledetailspage, {}, [className])}>
        <ArticleDetails id={id}/>
        <Text className={cls.commentTitle} title={t("Комментарии")}/>
        <CommentList  comments={comments} isLoading={commentsIsLoading}/>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)