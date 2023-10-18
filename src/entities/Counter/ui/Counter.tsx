import { useTheme } from '@/app/providers/ThemeProvider'
import { Button } from '@/shared/ui/Button'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/CounterSlice'

export const Counter = () => {
  const counterValue = useCounterValue()
  const { theme } = useTheme()
  const { increment, decrement } = useCounterActions()

  const incrementHandler = () => {
    increment()
  }

  const decrementHandler = () => {
    decrement()
  }
  return (
    <div>
      <h1
        className={theme}
        data-testid="value-title"
      >{`value = ${counterValue}`}</h1>
      <Button data-testid="increment-btn" onClick={incrementHandler}>
        {'incr'}
      </Button>
      <Button data-testid="decrement-btn" onClick={decrementHandler}>
        {'decr'}
      </Button>
    </div>
  )
}
