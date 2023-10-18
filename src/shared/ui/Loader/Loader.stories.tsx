import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loader } from './Loader'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'shared/Loader',
  component: Loader,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StyleDecorator()]
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]
