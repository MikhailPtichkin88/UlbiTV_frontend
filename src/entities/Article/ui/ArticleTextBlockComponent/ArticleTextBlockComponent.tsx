import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
     className?: string
    
}

export const ArticleTextBlockComponent = ({className, }:ArticleTextBlockComponentProps) => {
    
  return <div className={classNames(cls.articletextblockcomponent, {}, [className])}></div>
}
