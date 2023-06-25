import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CountrySelect } from './CountrySelect'
import 'app/styles/index.scss'
import { Country } from '../../Country'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  value: Country.Armenia,
}
