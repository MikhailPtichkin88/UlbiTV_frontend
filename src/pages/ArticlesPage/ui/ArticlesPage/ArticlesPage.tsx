import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticlesPageProps {
     className?: string
}

const ArticlesPage = ({className, }:ArticlesPageProps) => {
  const {t} = useTranslation("articles");

  return <div className={classNames(cls.articlespage, {}, [className])}>{t("Статьи")}</div>
}
export default memo(ArticlesPage)