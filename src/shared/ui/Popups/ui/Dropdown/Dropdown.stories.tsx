import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown, DropdownItem } from './Dropdown'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Button } from '../../../Button/Button'

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>

const items: DropdownItem[] = [
  { content: 'First' },
  { content: 'Second' },
  { content: 'Disabled', disabled: true },
]

const Template: ComponentStory<typeof Dropdown> = (args) => {
  return (
    <div style={{ padding: 50 }}>
      <Dropdown {...args} />
    </div>
  )
}

export const Normal = Template.bind({})
Normal.args = {
  trigger: <Button>Open</Button>,
  items: items,
  direction: 'bottom left',
}

export const Dark = Template.bind({})
Dark.args = {
  trigger: <Button>Open</Button>,
  items: items,
  direction: 'bottom left',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
