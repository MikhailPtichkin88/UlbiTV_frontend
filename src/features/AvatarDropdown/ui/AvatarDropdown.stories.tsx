import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          avatar:
            'https://logowik.com/content/uploads/images/homer-simpson4924.jpg',
          id: '1',
          username: 'Admin',
        },
      },
    }),
  ],
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
)

export const Normal = Template.bind({})
Normal.args = { dropdownDirection: 'bottom right' }
Normal.decorators = [StyleDecorator()]

export const Dark = Template.bind({})
Dark.args = { dropdownDirection: 'bottom right' }
Dark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]
