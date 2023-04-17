import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleDetails } from "./ArticleDetails";
import 'app/styles/index.scss';
import { Country } from "../../../Country";
import { Currency } from "../../../Currency";
import avatar from "shared/assets/img/avatar.jpg";

export default {
  title: "entities/ArticleDetails",
  component: ArticleDetails,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args:{
    to: '/'
  }
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
