import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import 'app/styles/index.scss';
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ErrorPage } from "./ErrorPage";

export default {
  title: "widget/ErrorPage",
  component: ErrorPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]