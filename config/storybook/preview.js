import { addDecorator } from "@storybook/react"
import { StyleDecorator } from "../../src/shared/config/storybook/styleDecorator/styleDecorator"
import { ThemeDecorator } from "../../src/shared/config/storybook/themeDecorator/themeDecorator"
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator"
import {Theme} from "../../src/app/providers/ThemeProvider/index"
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)