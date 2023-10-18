import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs } from './Tabs'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { ReactNode, useState } from 'react'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

interface TabItem {
  value: string
  content: ReactNode
}

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>

const tabs = [
  { value: 'tab 1', content: 'tab content 1' },
  { value: 'tab 2', content: 'tab content 2' },
  { value: 'tab 3', content: 'tab content 3' },
]

const Template: ComponentStory<typeof Tabs> = () => {
  const [tab, setTab] = useState<TabItem>({
    value: 'tab 1',
    content: 'tab content 1',
  })

  return <Tabs tabs={tabs} value={tab.value} onTabClick={setTab} />
}

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StyleDecorator()]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]
