import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationItem } from './NotificationItem'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

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
Normal.decorators = [StyleDecorator({ maxWidth: 500 })]
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  StyleDecorator({ maxWidth: 500 }),
  ThemeDecorator(Theme.DARK),
]
