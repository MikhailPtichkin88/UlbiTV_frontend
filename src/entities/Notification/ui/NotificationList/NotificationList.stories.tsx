import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotificationList } from './NotificationList'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

import withMock from 'storybook-addon-mock'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const notifications = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло событие 1',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло событие 1',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '3',
    title: 'Уведомление 3',
    description: 'Произошло событие 3',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
]

export default {
  title: 'entities/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = () => (
  <NotificationList />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: 'GET',
      status: 200,
      response: notifications,
    },
  ],
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
