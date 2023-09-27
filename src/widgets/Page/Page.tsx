import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollByPath, saveScrollActions } from '@/features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { StateSchema } from '@/app/providers/StoreProvider'
import { useSelector } from 'react-redux'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}
export const PAGE_ID = 'PAGE_ID'

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname)
  )
  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      saveScrollActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    )
  }, 1000)

  return (
    <section
      id={PAGE_ID}
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(cls.page, {}, [className])}
    >
      <div className={cls.content}>{children}</div>
      <div ref={triggerRef} />
    </section>
  )
}
