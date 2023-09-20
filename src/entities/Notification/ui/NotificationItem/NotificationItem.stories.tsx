import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationItem } from './NotificationItem'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>
const notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло событие 1',
  userId: '1',
  href: 'http://localhost:3000/admin',
}
const Template: ComponentStory<typeof NotificationItem> = () => (
  <NotificationItem item={notification} />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
