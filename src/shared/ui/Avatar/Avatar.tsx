import { CSSProperties, useMemo } from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
}

export const Avatar = ({className, src, size, alt="avatar"}:AvatarProps) => {
    
  const styles = useMemo<CSSProperties>(()=>({
    width: size || 100,
    height: size || 100
  }), [size])

  return <img
    style={styles}
    src={src}
    alt={alt}
    className={classNames(cls.avatar, {}, [className])}
  />
}
