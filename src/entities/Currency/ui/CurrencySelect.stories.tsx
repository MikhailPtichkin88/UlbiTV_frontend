import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'
import 'app/styles/index.scss'
import { Currency } from '../model/types/currency'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  value: Currency.RUB,
}
