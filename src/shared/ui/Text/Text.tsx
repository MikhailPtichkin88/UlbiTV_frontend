import { FC, memo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}
interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
  'data-testid'?: string
}
type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
}
export const Text: FC<TextProps> = memo(
  ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  }: TextProps) => {
    const HeaderTag = mapSizeHeaderTag[size]
    const mods: Mods = {
      [cls[theme]]: true,
      [cls[align]]: true,
      [cls[size]]: true,
    }
    return (
      <div className={classNames(cls.text, mods, [className])}>
        {title && (
          <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
            {title}
          </HeaderTag>
        )}
        {text && (
          <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
            {text}
          </p>
        )}
      </div>
    )
  }
)
