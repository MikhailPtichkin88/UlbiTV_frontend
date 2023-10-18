import { Story } from '@storybook/react'
import { CSSProperties } from 'react'

export const StyleDecorator =
  (style: CSSProperties = {}) =>
  (StoryComponent: Story) => {
    return (
      <div style={{ padding: 30, ...style }}>
        <StoryComponent />
      </div>
    )
  }
