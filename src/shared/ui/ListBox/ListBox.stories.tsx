import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListBox } from './ListBox'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Currency } from 'entities/Currency'
import { useState } from 'react'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

const Template: ComponentStory<typeof ListBox> = () => {
  const [value, setValue] = useState<string>(options[0].value)

  return <ListBox items={options} value={value} onChange={setValue} />
}

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
