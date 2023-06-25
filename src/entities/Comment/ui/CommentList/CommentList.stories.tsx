import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'entities/CommentList',
  component: CommentList,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => (
  <div style={{ width: 300, padding: 20 }}>
    <CommentList {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: {
        id: '1',
        username: 'Hanna',
        avatar:
          'https://logowik.com/content/uploads/images/homer-simpson4924.jpg',
      },
    },
    {
      id: '2',
      text: 'hello there',
      user: {
        id: '2',
        username: 'Alex',
        avatar:
          'https://logowik.com/content/uploads/images/homer-simpson4924.jpg',
      },
    },
  ],
}

export const Dark = Template.bind({})
Dark.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: {
        id: '1',
        username: 'Hanna',
        avatar:
          'https://logowik.com/content/uploads/images/homer-simpson4924.jpg',
      },
    },
    {
      id: '2',
      text: 'hello there',
      user: {
        id: '2',
        username: 'Alex',
        avatar:
          'https://logowik.com/content/uploads/images/homer-simpson4924.jpg',
      },
    },
  ],
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
