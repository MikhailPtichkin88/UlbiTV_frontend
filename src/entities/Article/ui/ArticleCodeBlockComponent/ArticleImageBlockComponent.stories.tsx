import { ComponentMeta, ComponentStory } from "@storybook/react";
import 'app/styles/index.scss';
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";

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
