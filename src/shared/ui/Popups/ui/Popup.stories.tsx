import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Popup } from './Popup'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui/Button/Button'

export default {
  title: 'shared/Popup',
  component: Popup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popup>

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />

export const Normal = Template.bind({})
Normal.args = {
  trigger: <Button>Open</Button>,
  children: <Button>Menu</Button>,
  direction: 'bottom left',
}

export const Dark = Template.bind({})
Dark.args = {
  trigger: <Button>Open</Button>,
  children: <Button>Menu</Button>,
  direction: 'bottom left',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
