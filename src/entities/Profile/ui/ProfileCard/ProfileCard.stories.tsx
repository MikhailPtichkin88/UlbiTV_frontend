import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import '@/app/styles/index.scss'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/img/avatar.jpg'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'Ulbi',
    city: '113',
    currency: Currency.RUB,
    avatar,
  },
}
Primary.decorators = [StyleDecorator({ maxWidth: 800 })]

export const withError = Template.bind({})
withError.args = {
  error: 'true',
}
withError.decorators = [StyleDecorator()]

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
Loading.decorators = [StyleDecorator()]
