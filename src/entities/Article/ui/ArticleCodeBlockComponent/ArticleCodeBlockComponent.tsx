
import { memo } from 'react'
import { ArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({block}:ArticleImageBlockComponentProps) => {
    
  return <div>
    <Code text={block.code}/>
  </div>
})
