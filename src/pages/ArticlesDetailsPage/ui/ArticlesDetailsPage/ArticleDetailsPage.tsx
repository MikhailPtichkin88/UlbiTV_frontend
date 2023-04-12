import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesDetailsPageProps {
     className?: string
    
}
const ArticleDetailsPage = ({className, }:ArticlesDetailsPageProps) => {
  const {t} = useTranslation("articles");

  return <div className={classNames(cls.articledetailspage, {}, [className])}>{t("Статьи")}</div>
}

export default memo(ArticleDetailsPage)