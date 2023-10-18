import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StyleDecorator()]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]
