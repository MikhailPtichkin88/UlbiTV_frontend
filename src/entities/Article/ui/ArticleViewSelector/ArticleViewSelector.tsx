import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { ArticleView } from '../../../Article/model/types/article'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/ui/Icon'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}
const viewTypes = [
  { view: ArticleView.SMALL, icon: TiledIcon },
  { view: ArticleView.BIG, icon: ListIcon },
]
export const ArticleViewSelector = ({
  className,
  view,
  onViewClick,
}: ArticleViewSelectorProps) => {
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.articleviewselector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', {
              [cls.notSelected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  )
}
