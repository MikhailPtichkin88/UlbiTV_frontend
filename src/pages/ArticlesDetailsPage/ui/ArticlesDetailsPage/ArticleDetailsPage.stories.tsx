import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  {ArticleDetailsPage}  from "pages/ArticlesDetailsPage";
import 'app/styles/index.scss';
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
