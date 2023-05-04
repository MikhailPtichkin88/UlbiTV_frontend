import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentList } from "./CommentList";
import 'app/styles/index.scss';

export default {
  title: "entities/CommentList",
  component: CommentList,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args:{
    to: '/'
  }
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

