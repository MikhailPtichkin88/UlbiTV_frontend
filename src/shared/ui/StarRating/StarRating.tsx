import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './StarRating.module.scss'
import StarIcon from '@/shared/assets/icons/star.svg'
import { Icon } from '../Icon'
import { useState } from 'react'

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}
const stars = [1, 2, 3, 4, 5]

export const StarRating = ({
  className,
  onSelect,
  size = 30,
  selectedStars = 0,
}: StarRatingProps) => {
  const [currentStarCount, setCurrentStarCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarCount(0)
    }
  }
  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={classNames(cls.starrating, {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(
            cls.starIcon,
            {
              [cls.hovered]: currentStarCount >= starNumber,
              [cls.normal]: currentStarCount < starNumber,
              [cls.isSelected]: isSelected,
            },
            []
          )}
          key={starNumber}
          Svg={StarIcon}
          width={size}
          height={size}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarCount >= starNumber}
        />
      ))}
    </div>
  )
}
