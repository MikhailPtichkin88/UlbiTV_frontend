import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown, DropdownItem } from './Dropdown'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button } from '../Button/Button'

export default {
  title: '/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>

const items: DropdownItem[] = [
  { content: 'First' },
  { content: 'Second' },
  { content: 'Disabled' },
]

const Template: ComponentStory<typeof Dropdown> = () => {
  return <Dropdown items={items} />
}

export const Normal = Template.bind({})
Normal.args = { trigger: <Button>Open</Button> }

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
