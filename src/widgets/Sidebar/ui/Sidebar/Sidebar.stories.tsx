import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Sidebar } from './Sidebar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import cls from './Sidebar.module.scss'
export default {
  title: 'widget/Sidebar',
  component: Sidebar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = { className: cls.storybookHeight }

export const Dark = Template.bind({})
Dark.args = { className: cls.storybookHeight }
Dark.decorators = [ThemeDecorator(Theme.DARK)]
