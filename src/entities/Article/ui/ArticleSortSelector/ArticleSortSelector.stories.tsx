import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator'
import { ArticleSortField } from '../../model/consts/consts'
import { ArticleSortSelector } from './ArticleSortSelector'
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator'

export default {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSortSelector>

const Template: ComponentStory<typeof ArticleSortSelector> = () => (
  <ArticleSortSelector
    sort={ArticleSortField.CREATED}
    order={'asc'}
    onChangeOrder={() => action('onChangeOrder')}
    onChangeSort={() => action('onChangeSort')}
  />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StyleDecorator()]
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)]
