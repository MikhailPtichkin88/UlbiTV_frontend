import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { Country } from 'entities/Country'
import { useState } from 'react'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator'
import { ListBox } from './ListBox'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
]

const Template: ComponentStory<typeof ListBox> = (args) => {
  const [value, setValue] = useState<string>(options[0].value)

  return <ListBox {...args} items={options} value={value} onChange={setValue} />
}

export const BottomLeft = Template.bind({})
BottomLeft.args = { direction: 'bottom left' }

export const BottomRight = Template.bind({})
BottomRight.args = { direction: 'bottom right' }

export const TopLeft = Template.bind({})
TopLeft.args = { direction: 'top left' }

export const TopRight = Template.bind({})
TopRight.args = { direction: 'top right' }

// export const Dark = Template.bind({})
// Dark.args = {}
// Dark.decorators = [ThemeDecorator(Theme.DARK)]
