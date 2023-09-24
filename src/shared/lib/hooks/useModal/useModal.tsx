import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

interface useModalProps {
  onClose?: () => void
  isOpen?: boolean
  animationDelay?: number
}

export const useModal = ({
  animationDelay,
  isOpen,
  onClose,
}: useModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const timerRef = useRef() as unknown as MutableRefObject<
    ReturnType<typeof setTimeout>
  >

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [animationDelay, onClose, timerRef])

  const onKeyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    },
    [close]
  )

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownHandler)

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDownHandler)
    }
  }, [isOpen, onKeyDownHandler, timerRef])

  return { isMounted, isClosing, close }
}
