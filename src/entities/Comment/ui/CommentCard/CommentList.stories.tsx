import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommentCard } from './CommentCard'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'entities/CommentCard',
  component: CommentCard,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
)

const comment = {
  id: '1',
  text: 'Comment 1',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://logowik.com/content/uploads/images/homer-simpson4924.jpg',
  },
}

export const Primary = Template.bind({})
Primary.args = {
  comment,
}
Primary.decorators = [StyleDecorator({ width: 500 })]
export const DarkSkeleton = Template.bind({})
DarkSkeleton.args = {
  comment,
  isLoading: true,
}
DarkSkeleton.decorators = [
  StyleDecorator({ width: 500 }),
  ThemeDecorator(Theme.DARK),
]
