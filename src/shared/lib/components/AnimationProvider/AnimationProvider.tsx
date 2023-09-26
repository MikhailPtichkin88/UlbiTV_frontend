import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
  Gesture?: GestureType
  Spring?: SpringType
  isLoaded?: boolean
}
const AnimationContext = createContext<AnimationContextPayload>({})

export const useAnimationContext = () => {
  return useContext(AnimationContext) as Required<AnimationContextPayload>
}

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const getAsyncAnimationModules = async () => {
    return Promise.all([
      import('@react-spring/web'),
      import('@use-gesture/react'),
    ])
  }

  const SpringRef = useRef<SpringType>()
  const GestureRef = useRef<GestureType>()
  const [isLoaded, setIsLoaded] = useState(false)

  const data: AnimationContextPayload = useMemo(
    () => ({
      Spring: SpringRef.current,
      Gesture: GestureRef.current,
      isLoaded,
    }),
    [isLoaded]
  )

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring
      GestureRef.current = Gesture
      setIsLoaded(true)
    })
  }, [])

  return (
    <AnimationContext.Provider value={data}>
      {children}
    </AnimationContext.Provider>
  )
}
