import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from '@/shared/ui/Button'

describe('Button', () => {
  test('test', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
  test('test', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
