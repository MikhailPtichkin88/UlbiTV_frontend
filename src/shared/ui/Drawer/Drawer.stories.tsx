import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Drawer } from './Drawer'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = () => (
  <Drawer>
    <></>
  </Drawer>
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
