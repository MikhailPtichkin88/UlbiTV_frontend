import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";
import 'app/styles/index.scss';

export default {
  title: "shared/Select",
  component: Select,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args:{
    to: '/'
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Укажите значение",
  options:[
    {value:"123", content: "First node"},
    {value:"321", content: "Second node"},
    {value:"213", content: "Third node"}
  ]
};

