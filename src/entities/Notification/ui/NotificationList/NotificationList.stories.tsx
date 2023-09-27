import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationList } from './NotificationList'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = () => (
  <NotificationList />
)

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
