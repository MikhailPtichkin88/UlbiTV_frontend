import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
     className?: string
    
}

export const ArticleImageBlockComponent = ({className, }:ArticleImageBlockComponentProps) => {
    
  return <div className={classNames(cls.articleimageblockcomponent, {}, [className])}></div>
}
