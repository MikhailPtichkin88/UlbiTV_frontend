import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import 'app/styles/index.scss';
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";


export default {
  title: "features/LoginForm",
  component: LoginForm,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm:{username:"123", password:"123"}
})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm:{username:"123", password:"123"}
})]

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [ StoreDecorator({
  loginForm:{username:"123", password:"123", error:"Incorrect login or password"}
})]

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [ StoreDecorator({
  loginForm:{isLoading:true}
})]