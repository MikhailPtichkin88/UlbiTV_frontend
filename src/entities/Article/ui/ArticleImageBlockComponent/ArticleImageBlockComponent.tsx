import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import { memo } from 'react'
import { ArticleImgBlock } from '../../model/types/article'
import {Text, TextAlign} from 'shared/ui/Text/Text'
interface ArticleImageBlockComponentProps {
     className?: string
    block: ArticleImgBlock
}

export const ArticleImageBlockComponent = memo(({className, block}:ArticleImageBlockComponentProps) => {
    
  return <div className={classNames(cls.articleimageblockcomponent, {}, [className])}>
    <img src={block.src} className={cls.img} alt={block.title}/>
    {block.title && (
      <Text text={block.title} align={TextAlign.CENTER}/>
    )}
  </div>
})
