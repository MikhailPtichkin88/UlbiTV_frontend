import { ComponentMeta, ComponentStory } from "@storybook/react";
import 'app/styles/index.scss';
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
export default {
  title: "shared/Text",
  component: Text,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title title title title",
  text: "Text text text text"
};

export const Error = Template.bind({});
Error.args = {
  title: "Title title title title",
  text: "Text text text text",
  theme:TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title title title title",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "Text text text text"
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Title title title title",
  text: "Text text text text"
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Title title title title",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "Text text text text"
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]