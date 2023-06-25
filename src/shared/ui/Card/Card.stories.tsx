import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from './Card'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text } from 'shared/ui/Text/Text'

export default {
  title: 'shared/Card',
  component: Card,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <Text title={'test'} text="test test test" />,
}
