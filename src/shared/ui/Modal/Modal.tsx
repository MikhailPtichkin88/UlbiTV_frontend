import { useTheme } from 'app/providers/ThemeProvider';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode;
    isOpen?:boolean;
    onClose?: ()=>void
    lazy?:boolean
}

const ANIMATION_DELAY = 300;

export const Modal = ({className, children, isOpen, onClose,  lazy,}:ModalProps) => {
    
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const {theme} = useTheme()

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const mods:Record<string,boolean> = {
    [cls.opened]:isOpen,
    [cls.isClosing]:isClosing,
  }

  const closeHandler = useCallback(() => {
    if(onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(()=>{
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  },[onClose])

  const onKeyDownHandler = useCallback((e:KeyboardEvent)=>{
    if(e.key === 'Escape'){
      closeHandler()
    } 
  },[closeHandler])

  const onContentClick = (e:React.MouseEvent)=>{
    e.stopPropagation()
  }

  useEffect(()=>{

    window.addEventListener("keydown", onKeyDownHandler)

    return ()=>{
      clearTimeout(timerRef.current)
      window.removeEventListener("keydown", onKeyDownHandler)
    }
  },[isOpen, onKeyDownHandler])

  if(lazy && !isMounted){
    return null
  }
  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}> 
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
