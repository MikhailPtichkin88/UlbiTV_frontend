import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AboutPage from './AboutPage'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import {
  withRouter,
  reactRouterParameters,
} from 'storybook-addon-react-router-v6'
import { MemoryRouter } from 'react-router-dom'
export default {
  title: 'pages/AboutPage',
  component: AboutPage,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
