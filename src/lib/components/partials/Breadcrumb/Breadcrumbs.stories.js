import React from "react";
import Breadcrumbs from "./Breadcrumbs";

export default {
    title: "Partials/Breadcrumbs",
    component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});

Default.args = {
    config: {
            links: [
                {
                    text: "Home",
                    href: "#",
                },
                {
                    text: "Library",
                    href: "#",
                },
                {
                    text: "Workshops",
                    href: "#",
                },
                {
                    text: "Contact Us",
                    href: "#",
                },
            ],
        },
};