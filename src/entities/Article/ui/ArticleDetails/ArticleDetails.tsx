import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList }
  from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import cls from './ArticleDetails.module.scss'
import { useSelector } from 'react-redux'
import { Text, TextAlign } from "shared/ui/Text/Text"
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading }
  from 'entities/Article/model/selectors/articleDetails'
import { TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers:ReducersList = {
  articleDetails: articleDetailsReducer}

export const ArticleDetails = memo(({className, id}:ArticleDetailsProps) => {

  const {t} = useTranslation("article")
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchArticleById(id))
  }, [id, dispatch])

  let content
  if(isLoading){
    content = (
      <div>
        <Skeleton className={cls.avatar} width={200} height={200} border={"50%"}/>
        <Skeleton className={cls.title} width={300} height={32}/>
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={"100%"} height={200} />
        <Skeleton className={cls.skeleton} width={"100%"} height={200} />
      </div>

    )}else
  if(error){
    content = (
      <Text
        title={t("Произошла ошибка при загрузке страницы")}
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}/>
    )}
  else{
    content = (
      <div>{t(" ARTICLE DETAILS")}</div>
    )}
 
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articledetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
