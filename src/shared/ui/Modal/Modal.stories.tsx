import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import 'app/styles/index.scss';
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,

    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen:true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis exercitationem vero reprehenderit tempore temporibus, sapiente deserunt tenetur illum porro cumque voluptates ullam sunt dolorum sequi aliquid aliquam natus? Quos.
    Obcaecati aliquam itaque iste, similique inventore illum quidem unde incidunt dicta ex perspiciatis labore accusamus nesciunt molestiae? Perspiciatis tenetur in nulla autem quod asperiores blanditiis repudiandae fugiat est, tempore iusto.`
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen:true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus facilis exercitationem vero reprehenderit tempore temporibus, sapiente deserunt tenetur illum porro cumque voluptates ullam sunt dolorum sequi aliquid aliquam natus? Quos.
    Obcaecati aliquam itaque iste, similique inventore illum quidem unde incidunt dicta ex perspiciatis labore accusamus nesciunt molestiae? Perspiciatis tenetur in nulla autem quod asperiores blanditiis repudiandae fugiat est, tempore iusto.`
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]