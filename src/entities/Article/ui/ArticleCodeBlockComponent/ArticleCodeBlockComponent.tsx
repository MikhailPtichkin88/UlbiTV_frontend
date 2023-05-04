
import { memo } from 'react'
import { ArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'
import cls from './ArticleCodeBlockComponent.module.scss'
interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({block}:ArticleImageBlockComponentProps) => {
    
  return <div className={cls.codeBlock}>
    <Code text={block.code}/>
  </div>
})
