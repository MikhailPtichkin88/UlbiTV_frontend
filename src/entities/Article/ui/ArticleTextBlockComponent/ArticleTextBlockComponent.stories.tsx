import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent";
import 'app/styles/index.scss';
import { Country } from "../../../Country";
import { Currency } from "../../../Currency";
import avatar from "shared/assets/img/avatar.jpg";

export default {
  title: "entities/ArticleTextBlockComponent",
  component: ArticleTextBlockComponent,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args:{
    to: '/'
  }
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
