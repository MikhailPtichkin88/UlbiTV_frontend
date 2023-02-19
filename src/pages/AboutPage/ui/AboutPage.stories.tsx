import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  AboutPage  from "./AboutPage";
import 'app/styles/index.scss';
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "pages/AboutPage",
  component: AboutPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage/>;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
