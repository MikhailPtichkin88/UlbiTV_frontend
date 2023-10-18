import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import '@/app/styles/index.scss'
import { Navbar } from './Navbar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
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
  title: 'widget/Navbar',
  component: Navbar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const AuthNavbar = Template.bind({})
AuthNavbar.args = {}
AuthNavbar.parameters = {
  mockData: [
    {
      url: __API__ + '/notifications',
      method: 'GET',
      status: 200,
      response: notifications,
    },
  ],
}
AuthNavbar.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: '1',
        username: 'admin',
        avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      },
    },
  }),
  withMock,
]
