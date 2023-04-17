import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";
import 'app/styles/index.scss';
import { Country } from "../../../Country";
import { Currency } from "../../../Currency";
import avatar from "shared/assets/img/avatar.jpg";

export default {
  title: "entities/ArticleImageBlockComponent",
  component: ArticleImageBlockComponent,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args:{
    to: '/'
  }
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
