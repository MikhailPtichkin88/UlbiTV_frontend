import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginModal } from './LoginModal'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
)

export const Normal = Template.bind({})
Normal.args = { isOpen: true, onClose: () => ({}) }

export const Dark = Template.bind({})
Dark.args = { isOpen: true, onClose: () => ({}) }
Dark.decorators = [ThemeDecorator(Theme.DARK)]
