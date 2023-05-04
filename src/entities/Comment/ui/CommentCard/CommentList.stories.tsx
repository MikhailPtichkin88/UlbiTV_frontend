import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentCard } from "./CommentCard";
import 'app/styles/index.scss';

export default {
  title: "entities/CommentCard",
  component: CommentCard,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args:{
    to: '/'
  }
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

