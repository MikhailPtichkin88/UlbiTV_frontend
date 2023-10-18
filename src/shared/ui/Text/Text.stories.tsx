import { ComponentMeta, ComponentStory } from '@storybook/react'
import '@/app/styles/index.scss'
import { Text, TextSize, TextTheme } from './Text'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'
export default {
  title: 'shared/Text',
  component: Text,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title title title title',
  text: 'Text text text text',
}
Primary.decorators = [StyleDecorator()]

export const Error = Template.bind({})
Error.args = {
  title: 'Title title title title',
  text: 'Text text text text',
  theme: TextTheme.ERROR,
}
Error.decorators = [StyleDecorator()]

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title title title title',
}
OnlyTitle.decorators = [StyleDecorator()]

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Text text text text',
}
OnlyText.decorators = [StyleDecorator()]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title title title title',
  text: 'Text text text text',
}
PrimaryDark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title title title title',
}
OnlyTitleDark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Text text text text',
}
OnlyTextDark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]

export const SizeS = Template.bind({})
SizeS.args = {
  title: 'Title title title title',
  text: 'Text text text text',
  size: TextSize.S,
}
SizeS.decorators = [StyleDecorator()]

export const SizeM = Template.bind({})
SizeM.args = {
  title: 'Title title title title',
  text: 'Text text text text',
  size: TextSize.M,
}
SizeM.decorators = [StyleDecorator()]

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title title title title',
  text: 'Text text text text',
  size: TextSize.L,
}
SizeL.decorators = [StyleDecorator()]
