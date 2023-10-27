import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Skeleton } from './Skeleton'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    loki: {
      skip: ['NormalDark'],
    },
  },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  width: '100%',
  height: 200,
}
Normal.decorators = [StyleDecorator()]

export const Circle = Template.bind({})
Circle.args = {
  border: '50%',
  width: 100,
  height: 100,
}
Circle.decorators = [StyleDecorator()]

export const NormalDark = Template.bind({})
NormalDark.args = {
  width: '100%',
  height: 200,
}
NormalDark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]

export const CirclelDark = Template.bind({})
CirclelDark.args = {
  border: '50%',
  width: 100,
  height: 100,
}
CirclelDark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]
