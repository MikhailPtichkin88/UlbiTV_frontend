import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  ProfilePage  from "./ProfilePage";
import 'app/styles/index.scss';
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args as object} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
