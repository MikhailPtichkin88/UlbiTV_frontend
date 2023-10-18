import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

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
  <CommentList {...args} />
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
Primary.decorators = [StyleDecorator({ width: 500 })]
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
Dark.decorators = [StyleDecorator({ width: 500 }), ThemeDecorator(Theme.DARK)]
