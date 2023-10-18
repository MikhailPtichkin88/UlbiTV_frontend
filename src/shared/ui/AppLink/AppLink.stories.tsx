import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'shared/AppLink',
  component: AppLink,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
}
Primary.decorators = [StyleDecorator()]
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
}
Secondary.decorators = [StyleDecorator()]
export const Red = Template.bind({})
Red.args = {
  children: 'Text',
  theme: AppLinkTheme.RED,
}
Red.decorators = [StyleDecorator()]
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
}
PrimaryDark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
}
SecondaryDark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]

export const RedDark = Template.bind({})
RedDark.args = {
  children: 'Text',
  theme: AppLinkTheme.RED,
}
RedDark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]
